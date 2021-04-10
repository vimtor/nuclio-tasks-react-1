import React from "react";

function TaskItem({ id, title, onClick }) {
  return <li onClick={() => onClick(id)}>{title}</li>;
}

export default TaskItem;
