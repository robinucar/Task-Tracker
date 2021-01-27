import TaskItem from './TaskItem';
const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          toggleItem={onToggle}
        />
      ))}
    </>
  );
};

export default Task;
