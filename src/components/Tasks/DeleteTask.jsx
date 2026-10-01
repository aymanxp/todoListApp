import { deleteTask } from '../../utils/main'

const DeleteTask = ({ taskId, removeTask }) => {
  const handleDeleteTask = async event => {
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
      <button onClick={handleDeleteTask}>Delete</button>
    </>
  )
}


export default DeleteTask;

