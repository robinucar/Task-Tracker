import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
import AddTask from './components/AddTask';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      time: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      time: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      time: 'Feb 6th at 2:30pm',
      reminder: false,
    },
  ]);

  const deleteTaskItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Task
          tasks={tasks}
          onDelete={deleteTaskItem}
          onToggle={toggleReminder}
        />
      ) : (
        'No Task to Show'
      )}
    </div>
  );
}

export default App;
