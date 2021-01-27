import { useState } from 'react';
import Header from './components/Header';
import Task from './components/Task';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 6th at 2:30pm',
      reminder: false,
    },
  ]);

  const deleteTaskItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTaskItem} />
      ) : (
        'No Task to Show'
      )}
    </div>
  );
}

export default App;
