import React from "react";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import TaskItem from "./components/task-item";
import useLocalStorage from "./hooks/use-local-storage";

function App() {
  const [tasks, setTasks] = useLocalStorage("storedTasks", []);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <h2>Un titulo</h2>
      <p>Pending tasks: {tasks.length}</p>
      <TaskForm onSubmit={createTask} />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            onClick={removeTask}
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
