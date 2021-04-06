import React from 'react'

function TaskItem({ id, title, completed, onClick }) {
    const handleClick = () => onClick(id)
    return (
        <li 
            onClick={handleClick} 
            style={{ backgroundColor: completed ? 'red' : 'transparent' }}
        >
            {title}
        </li>
    )
}

export default TaskItem