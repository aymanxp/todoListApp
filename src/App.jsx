import { useState } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TasksContainer from './components/TasksContainer';
import NoTaskDisplay from './components/NoTaskDisplay';
import { getTasks, getTask, deleteTask, addTask, updateTask } from './utils/main';

const dataToUpdate = { title: "new title" };
const id = "6ab40ca7dc199db0bddb12d2";

const updatedTask = await updateTask(id, dataToUpdate);

const tasks = await getTasks();

const App = () => {
  return (
    <>
      <Header />
      <AddTaskForm />
      {
        tasks.length === 0 ? <NoTaskDisplay /> : <TasksContainer tasks={tasks} />
      }
    </>
  )
}

export default App;
