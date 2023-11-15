// UpdateTaskForm.js
import React, { useState } from 'react';

const UpdateTaskForm = ({ task, onUpdate }) => {
  const [updatedTask, setUpdatedTask] = useState({ ...task });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={updatedTask.title} onChange={handleInputChange} />
      </label>
      {/* Add other fields for description, dueDate, priority, etc. */}
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateTaskForm;

