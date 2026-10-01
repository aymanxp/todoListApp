// const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5173/';
const BASE_URL = 'http://localhost:3001';

const request = async (url, options = {}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!response.ok) {
    const message = `Request failed with status ${response.status}`;
    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {
    }
    throw new Error(message);
  }


  // Delete return 204 No Content, Nothing to parse 
  if (response.status === 204) return null;

  const resp = await response.json();
  return resp;
}


export const getTasks = () => request('/api/tasks');

export const addTask = newTask =>
  request('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(newTask),
  });


export const updateTask = (id, updatedFields) =>
  request(`/api/tasks/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedFields),
  });



export const deleteTask = id =>
  request(`/api/tasks/${id}`, {
    method: 'DELETE',
  })

