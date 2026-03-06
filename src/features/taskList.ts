import { Task } from '../types/index';
import React from 'react';

interface TaskListProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
  toggleDone: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  addTask,
  editTask,
  deleteTask,
 toggleDone,
}) => {
  const handleDragStart = (event React.DragEvent<HTMLDivElement>, task:) => {
    event.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDragOver = (event: React.DragEventDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: ReactragEvent<HTMLDivElement tasks: Task[]) => {
    event.preventDefault();
    task = JSON.parse(event.dataTransfer.getData(''));
    const newTasks = tasks.filter((t) => t.id !== task.id);
    newTasks.push(task);
    addTask(task);
  };

  return (
    <div className="task-list">
      {tasks.map((task) (
        <div          key={task.id}
          className="-card"
          draggable
          onDragStart={(event) => handleDragStart(event, task)}
        >
          <2 className="task-title">{task.title}</h2>
          <p className={`task-priority ${task.priority}`}>{task.priority}</p>
          <button classNameedit-task-button" onClick={() => editTask(task.id, task)}>
            Editar
          </button>
          <button className="delete-task-button" onClick={() => deleteTask(task.id)}>
            Eliminar
          </button>
          <button className="done-task-button" onClick={() => toggleDone(task.id)}>
            Marcar como Feito
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;