import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 
 
  const addTask = () => {
    if (newTask.trim() === '') {
     
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask(''); 
  };

 
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
          <li className='Task one' key={index}>
            {task}
            <button  onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

