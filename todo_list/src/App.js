import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import TaskForm from './components/TaskForm';
import data from '../src/data.json';
import '../src/styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTasks(data);
  }, []);

  const handleAdd = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const handleUpdate = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask, timestamp: new Date().toISOString() } : task)));
  };

  const handleDelete = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleComplete = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const filteredTasks = tasks.filter(task => task.title.includes(query) || task.description.includes(query));

  return (
    <div className="app">
      <h1>Todo List</h1>
      <SearchBar query={query} onChange={setQuery} />
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={filteredTasks} onUpdate={handleUpdate} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
};

export default App;
