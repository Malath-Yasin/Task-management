// controllers/taskController.js
const Task = require('../models/taskModel');


const taskController = {
  getAllTasks: async (req, res) => {
    try {
      // Fetch tasks excluding those with isDelete: true
      const tasks = await Task.find({ isDelete: { $ne: true } });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks.', error });
    }
  },
  getTaskById: async (req, res) => {
    const taskId = req.params.taskId;

    try {
      // Find the task by ID
      const task = await Task.findById(taskId);

      // Check if the task exists
      if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error getting task by ID.', error });
    }
  },



  addTask: async (req, res) => {
    const { title, description, dueDate, priority } = req.body;

    try {
      // Basic validation
      if (!title || !description || !dueDate || !priority) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

      // Create and save the new task, associating it with the logged-in user
      const newTask = new Task({
        title,
        description,
        dueDate,
        priority,
        user: req.user.id, // Associate the task with the logged-in user
      });

      const savedTask = await newTask.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error adding task.', error });
    }
  },

  updateTaskAllFields: async (req, res) => {
    const taskId = req.params.taskId;
    const updatedTaskData = req.body;

    try {
      // Find the task by ID and update all fields
      const task = await Task.findByIdAndUpdate(taskId, updatedTaskData, { new: true, fields: {status: 0} });


      // Check if the task exists
      if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task.', error });
    }
  },

  // Separate method for updating only the status
  updateTaskStatus: async (req, res) => {
    const taskId = req.params.taskId;
    const { status } = req.body;

    try {
      // Find the task by ID and update only the status
      const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });

      // Check if the task exists
      if (!task) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task status.', error });
    }
  },



  deleteTask: async (req, res) => {
    const taskId = req.params.taskId;
  
    try {
      console.log('Soft deleting task with ID:', taskId);
  
      // Find the task by ID and update the isDeleted field
      const softDeletedTask = await Task.findByIdAndUpdate(
        taskId,
        { isDelete: true },
        { new: true }
      );
  
      console.log('Soft deleted task:', softDeletedTask);
  
      // Check if the task exists
      if (!softDeletedTask) {
        return res.status(404).json({ message: 'Task not found.' });
      }
  
      res.status(200).json({ message: 'Task soft deleted successfully.', softDeletedTask });
    } catch (error) {
      console.error('Error soft deleting task:', error);
      res.status(500).json({ message: 'Error soft deleting task.', error });
    }
  },
  
}
module.exports = taskController;
