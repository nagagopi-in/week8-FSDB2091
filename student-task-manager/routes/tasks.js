const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Get all tasks by courseId
router.get('/:courseId/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({ courseId: req.params.courseId });
    if (!tasks.length) {
      return res.status(404).json({ message: 'No tasks found for this course.' });
    }
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
