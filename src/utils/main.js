const BASE_URL = `http://localhost:3001/api`
const catchError = (error) => console.log(error.message);

// Get all tasks
async function getTasks() {
  try {
    const url = `${BASE_URL}/tasks`;
    const response = await fetch(url, { method: "GET" });
    if (!response.ok)
      throw new Error(`Response status:  ${response.status}`);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    catchError(error);
  }
}
// Get a specific by Id 
async function getTask(id) {
  try {
    const url = `${BASE_URL}/tasks/${id}`;
    const response = await fetch(url, { method: "GET" });
    const task = await response.json();
    return task;
  } catch (error) {
    catchError(error);
  }
}
// Delete a task by Id
async function deleteTask(id) {
  try {
    const url = `${BASE_URL}/tasks/${id}`;
    const response = await fetch(url, { method: "DELETE" });
    if (!response.ok)
      return false;
    return true;
  } catch (error) {
    catchError(error);
  }
}


// Create a new task 
async function addTask(newTask) {
  try {
    if (!newTask)
      throw new Error('Task is undefined!');
    const url = `${BASE_URL}/tasks`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: newTask.title,
        description: newTask.description
      })
    });
    if (!response.ok)
      throw new Error(`Response status: ${response.status}`);

    const addedTask = await response.json();
    return addedTask;
  } catch (error) {
    catchError(error);
  }
}



// I need to test those :

// Update a certain task by Id
async function updateTask(id, dataToUpdate) {
  try {
    if (!id || !dataToUpdate)
      throw new Error('Something is missing!');
    const url = `${BASE_URL}/tasks/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...dataToUpdate })
    });
    if (!response.ok)
      throw new Error(`Response status: ${response.status}`);

    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    catchError(error);
  }
}


export { getTasks, getTask, deleteTask, addTask, updateTask };
