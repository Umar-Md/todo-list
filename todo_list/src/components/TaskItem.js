import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(task.id, { title, description });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onComplete(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span>{task.title}</span>
        )}
        <button onClick={handleExpand}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
      {isExpanded && (
        <div className="task-details">
          {isEditing ? (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <p>{task.description}</p>
          )}
          <p>Last updated: {task.timestamp}</p>
          {isEditing && <button onClick={handleSave}>Save</button>}
        </div>
      )}
    </div>
  );
};

export default TaskItem;
