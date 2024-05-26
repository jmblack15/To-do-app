import { useState } from "react";
import { ListTasks } from "./ListTasks";

const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [listTasks, setListTasts] = useState<string[]>([])

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    setListTasts(prevTasks => [...prevTasks, newTask])
    setNewTask('')
  }

  const handleDeleteTask = (index: number) => {
    setListTasts(task => task.filter((_, i) => i !== index))
  }

  return (
    <main>
      <h1>To do list</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Create new task</button>
      </div>

      <ListTasks
        listTasks={listTasks}
        deleteTask={handleDeleteTask}
      />
    </main>
  );
};

export { TodoApp };