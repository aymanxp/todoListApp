import { useState } from "react";
import { addTask } from '../../utils/main';


const Form = ({ appendTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");


  const handleTitleChange = event => setTaskTitle(event.target.value);
  const handleDescChange = event => setTaskDesc(event.target.value);



  const createTask = async event => {
    event.preventDefault();
    if (taskTitle === "" || taskDesc === "") {
      alert("Content missing");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDesc,
      status: false
    };
    setTaskDesc("");
    setTaskTitle("");
    appendTask(newTask);
    try {
      const task = await addTask(newTask);
      appendTask(task);
    } catch (error) {
      popTask();
      console.error(error.message);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Task Title" value={taskTitle} onChange={handleTitleChange} /><br />
      <input type="text" placeholder="Task Description" value={taskDesc} onChange={handleDescChange} /><br />
      <button type="submit" onClick={async event => await createTask(event)}>Add Task</button>
    </div>
  )
}

export default Form;
