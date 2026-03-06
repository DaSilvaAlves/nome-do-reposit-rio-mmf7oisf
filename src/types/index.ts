interface Task {
  id: string;
 : string;
  priority: 'low' | 'medium' | 'high';
  done: boolean;
}

interface TaskList {
  tasks: Task[];
  addTask: (task: Task) => void;
  editTask: (id: string, task: Task) => void;
  deleteTask: (id: string) => void;
  toggleDone: (id: string) => void;
}