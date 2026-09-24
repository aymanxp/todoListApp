import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import Task from '../models/Task.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ');
}));

// Get all tasks 
app.get('/api/tasks', async (request, response, next) => {
  try {
    const tasks = await Task.find({});
    response.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

// Get a specific task 
app.get('/api/tasks/:id', async (request, response, next) => {
  try {
    const task = await Task.findById(request.params.id);
    if (!task)
      return response.status(404).json({ error: 'task not found' });
    response.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

// Create a task 
app.post('/api/tasks', async (request, response, next) => {
  try {
    const { title, description } = { ...request.body };
    if (!title || !description)
      response.status(400).json({ "message": "content missing" });

    const task = new Task({
      title,
      description,
    });

    const savedTask = await task.save();
    response.status(201).json(savedTask);
  } catch (error) {
    next(error);
  }
});

// Update a task 
app.put('/api/tasks/:id', async (request, response, next) => {
  try {
    const dataToUpdate = request.body;

    const updatedTask = await Task.findByIdAndUpdate(
      request.params.id,
      { ...dataToUpdate },
      { new: true }
    );

    if (!updatedTask) {
      return response.status(404).json({ error: 'task not found' });
    }

    response.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
});

// Delete a task 
app.delete('/api/tasks/:id', async (request, response, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(request.params.id);

    if (!deletedTask) {
      return response.status(404).json({ error: 'task not found' });
    }

    response.status(204).end();
  } catch (error) {
    next(error);
  }
});

//  unknown endpoint 
const unknownEndpoint = (request, response) => {
  response.status(404).json({ error: 'unknown endpoint' });
};
app.use(unknownEndpoint);

// error handler (MUST be the last middleware) 
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};
app.use(errorHandler);

const PORT = process.env.BACKEND_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
