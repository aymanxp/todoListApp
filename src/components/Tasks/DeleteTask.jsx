import { deleteTask, getTask } from '../../utils/main'

const DeleteTask = ({ taskId, removeTask }) => {
  const handleDeleteTask = async (event, removeTask) => {
    event.preventDefault();
    try {
      await deleteTask(taskId);
      removeTask(taskId);
    } catch (error) {
      console.error(error.message);
    }
  }


  return (
    <>
      <button onClick={async event => await handleDeleteTask(event, taskId, removeTask)}>Delete</button>
    </>
  )
}


export default DeleteTask;

