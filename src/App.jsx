import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TasksContainer from './components/Tasks/TasksContainer';
import NoTaskDisplay from './components/Tasks/NoTaskDisplay';
import { getTasks, getTask, deleteTask, addTask, updateTask } from './utils/main';


const App = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasks(data);
      fetchData();
    }
  }, [])

  const appendTask = newTask => setTasks(tasks + newTask);
  const removeTask = taskId => {
    newTasksList = tasks.filter(task => task.id === taskId);
    setTasks(newTasksList);
  }
  const changeTaskStatus = taskId => {
    tasks.forEach(task => {
      if (task.id === taskId)
        task.status = !task.status;
    })
    setTasks(tasks);
  }





  return (
    <>
      <Header />
      <Form appendTask={appendTask} />
      {
        tasks.length === 0 ? <NoTaskDisplay /> : <TasksContainer tasks={tasks} changeTaskStatus={changeTaskStatus} removeTask={removeTask} />
      }
    </>
  )
}

export default App;
