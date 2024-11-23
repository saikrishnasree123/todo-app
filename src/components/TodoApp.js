import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, input]);
            setInput('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>TODO Application</h1>
            <input
                type="text"
                placeholder="Enter a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
