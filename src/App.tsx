import React, { useState, useEffect from 'react';
 './styles/theme.css';
import TaskList from './features/taskList';

interface Task {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  done: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('low');
  [search, setSearch] = useState('');

  useEffect(() => {
    const storedTasks localStorage.getItem('tasks');
    if (stored) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id: string, task: Task) => {
    const newTasks = tasks.map((t) => (t.id === id ? task : t));
    setTasks(newTasks);
  };

  const deleteTask = (id: string) => {
    const newTasks = tasks((t) => t.id !== id);
 setTasks(newTasks);
  };

  const toggleDone = (id: string) => {
    const newTasks = tasks.map((t) => (t.id === id ? { ...t, done: !t } : t));
    setTasks(newTasks);
  };

  const handleAddTask = () => {
    const task: Task = {
     : Date.now().toString(),
      title: newTask,
      priority      done: false,
    };
    addTask(task);
    setTask('');
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div classNamecontainer">
      <h1>Gestor de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        placeholder="Adicionar tarefa"
        className="search-input"
      />
      <select value={} onChange={(event) => setPriority(event.target.value)}>
        < value="low">Baixa</option>
        <option value="medium">Média</option>
        < value="high">Altaoption>
      </select>
      <button className="add-task-button" onClick={handleAddTask}>
        Adicionar
      </button>
      <input
        type="text"
        value={}
        onChange={handleSearch}
        placeholder="Pesquisar tarefas"
        className="-input"
      />
      <TaskList tasks={filteredTasks} addTask={addTask} editTask={editTask} deleteTask={deleteTask} toggleDonetoggleDone} />
    </div>
  );
};

export default App;