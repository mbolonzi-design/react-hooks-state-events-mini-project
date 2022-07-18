import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [filterCategory, setFilterCategory] = useState("All")
  const [tasksArray, setTasksArray] = useState(TASKS)

  function handleBtnClick(e) {
    setFilterCategory(e.target.innerHTML)
  }

  function handleAddElements(newTask) {
    setTasksArray([...tasksArray, newTask])
    console.log(tasksArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onBtnClick={handleBtnClick} selectedCategory={filterCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddElements} />
      <TaskList filter={filterCategory} tasks={tasksArray} />
    </div>
  );
}

export default App;
