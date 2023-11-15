// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTaskData } from '../redux/tasks/tasksSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTaskData(id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
            />
            {task.title} - {task.description} - {task.dueDate} - {task.priority}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
