import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [tasks, setTasks] = useLocalStorage("storedTasks", [])

  function handleSubmit(task) {
    setTasks([...tasks, task])
  }

  function handleTaskClick(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <p>Peding tasks: {tasks.length}</p>
      <TaskForm onSubmit={handleSubmit} />
      <TaskList>
        {tasks.map(task => (
          <TaskItem 
            key={task.id}
            id={task.id}
            title={task.title}
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>
    </div>
  )
}

export default App