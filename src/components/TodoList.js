import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [newTask, setNewTask] = useState(''); // State to store the new task input

  // Function to add a new task to the list
  const addTask = () => {
    if (newTask.trim() === '') {
      // Do not add empty tasks
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask(''); // Clear the input field
  };

  // Function to remove a task by index
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li  key={index}>
            {task}
            <button  onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

