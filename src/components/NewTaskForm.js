import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formText, setFormText] = useState("Write a bunch of code")
  const [formCategory, setFormCategory] = useState("Code")

  function handleSubmit(event) {
    event.preventDefault()
    setFormText(event.target.text.value)
    setFormCategory(event.target.category.value)

    const newTask = {
      text: formText,
      category: formCategory
    }
    console.log(newTask)
    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.slice(1).map((category => (
            <option key={category}>{category}</option>
          )))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
