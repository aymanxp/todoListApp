import { updateTask } from '../../utils/main';


const ChangeTaskStatus = ({ taskId, oldStatus, updateTaskStatus }) => {
  const handleStatusChange = async event => {
    event.preventDefault();
    try {
      await updateTask(taskId, { status: !oldStatus })
      updateTaskStatus(taskId);
    } catch (error) {
      console.error(error.message);
    }
  }
  const btnText = !oldStatus ? "Done" : "In Progress";

  return (
    <>
      <button onClick={handleStatusChange}>{btnText}</button >
    </>
  )
}

export default ChangeTaskStatus;

