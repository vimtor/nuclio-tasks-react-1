import React from "react";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import TaskItem from "./components/task-item";
import useLocalStorage from "./hooks/use-local-storage";

function App() {
  const [tasks, setTasks] = useLocalStorage("storedTasks", []);

  function handleSubmit(task) {
    setTasks([...tasks, task]);
  }

  function handleTaskClick(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Peding tasks: {tasks.length}</p>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>
    </div>
  );
}

export default App;
