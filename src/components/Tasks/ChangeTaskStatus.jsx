import { updateTask } from '../../utils/main';


const ChangeTaskStatus = ({ taskId, oldStatus, ChangeTaskStatus }) => {
  const handleStatusChange = async (event, taskId, ChangeTaskStatus) => {
    event.preventDefault();
    try {
      await updateTask(taskId, { status: !oldStatus })
      modifyTaskStatus(taskId);
    } catch (error) {
      console.error(message.error);
    }
  }
  const BtnText = !oldStatus ? "Done" : "In Progress";

  return (
    <>
      <button onClick={async event => await handleStatusChange(event, taskId, ChangeTaskStatus)}>{BtnText}</button >
    </>
  )
}

export default ChangeTaskStatus;

