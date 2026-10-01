import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TasksContainer from './components/Tasks/TasksContainer';
import NoTaskDisplay from './components/Tasks/NoTaskDisplay';
import { getTasks } from './utils/main';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const appendTask = newTask => setTasks(prevTasks => [...prevTasks, newTask]);

  const removeTask = taskId =>
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

  const updateTaskStatus = taskId =>
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );

  return (
    <>
      <Header />
      <Form appendTask={appendTask} />
      {error && <p>Error loading tasks: {error}</p>}
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <NoTaskDisplay />
      ) : (
        <TasksContainer
          tasks={tasks}
          updateTaskStatus={updateTaskStatus}
          removeTask={removeTask}
        />
      )}
    </>
  );
};

export default App;
