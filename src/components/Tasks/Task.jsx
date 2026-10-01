import DeleteTask from './DeleteTask';
import ChangeTaskStatus from './ChangeTaskStatus';




const Task = ({ id, title, description, status, updateTaskStatus, removeTask }) => {
  const taskState = status ? "Done" : "In Progress";

  return (
    < div >
      <p>Title: {title}, Descripption: {description}, Status: {taskState}</p>
      <ChangeTaskStatus taskId={id} oldStatus={status} updateTaskStatus={updateTaskStatus} />
      <DeleteTask taskId={id} removeTask={removeTask} />
    </div >
  );
};


export default Task;
