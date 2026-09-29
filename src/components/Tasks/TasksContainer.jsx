import ChangeTaskStatus from './ChangeTaskStatus';
import Task from './Task';


const TasksContainer = ({ tasks, ChangeTaskStatus, removeTask }) => {
  return (
    <div>
      {tasks.map(task => <Task id={task.id} title={task.title} description={task.description} status={task.status} ChangeTaskStatus={ChangeTaskStatus} removeTask={removeTask} />)}
    </div>
  )
}


export default TasksContainer;
