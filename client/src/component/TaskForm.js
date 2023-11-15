// src/components/TaskForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewTasks, fetchTasks } from '../redux/tasks/tasksSlice';

const TaskForm = () => {
// console.log("first")
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);


useEffect(()=>{
    dispatch(fetchTasks());
    console.log("first")
},[dispatch]);







  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    // status: 'pending',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === '') {
      return;
    }
        // Create an object with the new post data
        const newTaskData = {
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
            priority: task.priority,
            // status:task.status,
          };
      
      
    dispatch(addNewTasks(newTaskData));
    setTask({ title: '', description: '', dueDate: '', priority: 'medium' });
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={task.title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={task.description} onChange={handleChange} />
        </label>
        <label>
          Due Date:
          <input type="text" name="dueDate" value={task.dueDate} onChange={handleChange} />
        </label>
        <label>
          Priority:
          <select name="priority" value={task.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
        {/* <button type="button" >Complete</button> */}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
