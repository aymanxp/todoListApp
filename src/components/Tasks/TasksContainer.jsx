import ChangeTaskStatus from './ChangeTaskStatus';
import Task from './Task';


const TasksContainer = ({ tasks, updateTaskStatus, removeTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <Task
            id={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            updateTaskStatus={updateTaskStatus}
            removeTask={removeTask} />
        </div>
      ))}
    </div>
  )
}


export default TasksContainer;
