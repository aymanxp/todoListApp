import { useState } from 'react';
import { addTask } from '../../utils/main';

const Form = ({ appendTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleTitleChange = event => setTaskTitle(event.target.value);
  const handleDescChange = event => setTaskDesc(event.target.value);

  const createTask = async event => {
    event.preventDefault();

    if (taskTitle.trim() === '' || taskDesc.trim() === '') {
      alert('Content missing');
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDesc,
      status: false,
    };

    setSubmitting(true);
    try {
      console.log('Trying to Add a new Task!!');
      const savedTask = await addTask(newTask);
      console.log('Task Added To the DB!!');
      appendTask(savedTask);
      console.log('Task Added to the Frontend!!');
      setTaskTitle('');
      setTaskDesc('');
    } catch (error) {
      alert(`Could not add task: ${error.message}`);
      console.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={createTask}>
      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={handleTitleChange}
      />
      <br />
      <input
        type="text"
        placeholder="Task Description"
        value={taskDesc}
        onChange={handleDescChange}
      />
      <br />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
};

export default Form;
