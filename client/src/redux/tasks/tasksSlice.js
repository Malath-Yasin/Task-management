import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// task reducers
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
    addNewTask: (state, action) => {
      state.status = 'succeeded';
      state.tasks.push(action.payload);
    },
    // updateTask: (state, action) => {
    //   state.status = 'succeeded';
    //   state.tasks.push(action.payload);
    // },
    deleteTask: (state, action) => {
        const taskId=action.payload;
       return {
        ...state,
        tasks: state.tasks.filter((task)=>task.id !== taskId)
       }
      
    },
  },
});
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('token')}`;

export const { addNewTask, setTask,deleteTask } = tasksSlice.actions;

// Async thunk to fetch tasks from the API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async (_, { dispatch }) => {
  try {
    const response = await axios.get('http://localhost:3001/tasks/');
    const tasks = response.data;
    dispatch(setTask(tasks));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
});

// Async thunk to add a task to the API
export const addNewTasks = createAsyncThunk('tasks/addNewTask', async (newTask, { dispatch }) => {
  try {
    const response = await axios.post('http://localhost:3001/tasks/', newTask);
    const newTaskData = response.data;
    dispatch(addNewTask(newTaskData));
  } catch (error) {
    console.error('Error adding new task:', error);
    
  }
});

// Async thunk to delete a task to the API
export const deleteTaskData = createAsyncThunk('tasks/deleteTask', async (id, { dispatch }) => {
  try {
   await axios.delete(`http://localhost:3001/tasks/${id}`);
    dispatch(deleteTask(id));
  } catch (error) {
    console.error('Error deleting  task:', error);
  }
});

export default tasksSlice.reducer;
