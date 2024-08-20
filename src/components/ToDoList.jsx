import React, { useState } from "react";

export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add a new task to the list
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Toggle the completed status of a task
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Remove a task from the list
  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="p-md">
      <h4 className="primary-font">Example Todo List App</h4>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="secondary-font">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "",
                display: "inline-block",
                minWidth: "30%",
              }}
              onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button className="primary-font" onClick={() => removeTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
