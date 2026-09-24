import Task from './Task';


const TasksContainer = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => <Task title={task.title} description={task.description} status={task.status} />)}
    </div>
  )
}


export default TasksContainer;
