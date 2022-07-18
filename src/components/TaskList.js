import React from "react";
import Task from "./Task";


function TaskList({ tasks, filter }) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return tasks
    } else {
      return task.category.includes(filter)
    }
  })

  const tasksToDisplay = filteredTasks.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} />
  ))
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
