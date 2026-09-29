import { useState, useEffect } from 'react';
import DeleteTask from './DeleteTask';
import ChangeTaskStatus from './ChangeTaskStatus';
import NoTaskDisplay from './NoTaskDisplay';
import TaskContentAsDone from './TaskContentAsDone';
import TaskContentAsNotDone from './TaskContentAsNotDone';




const Task = ({ id, title, description, status, ChangeTaskStatus, removeTask }) => {

  return (
    < div >
      <p>Title: {title}, Descripption: {description}</p>
      <ChangeTaskStatus taskId={id} oldStatus={status} ChangeTaskStatus={ChangeTaskStatus} />
      <DeleteTask taskId={id} removeTask={removeTask} />
    </div >
  )
}


export default Task;
