import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Check VIP room maintenance", done: false },
    { id: 2, text: "Verify transport schedule", done: true }
  ]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  return (
    <div className="card shadow-sm border-0 p-4 mt-4">
      <h4 className="fw-bold mb-3" style={{ color: '#0d1b2a' }}>Service Tasks ✅</h4>
      <div className="d-flex mb-3">
        <input 
          className="form-control me-2" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="New Task..." 
        />
        <button className="btn btn-gold" onClick={addTask}>Add</button>
      </div>
      <ul className="list-group list-group-flush">
        {tasks.map(t => (
          <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
            <input type="checkbox" checked={t.done} onChange={() => {
              setTasks(tasks.map(task => task.id === t.id ? {...task, done: !task.done} : task))
            }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;