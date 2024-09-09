const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  name: { type: String, required: true },
  dueDate: { type: Date, required: true },
  details: { type: String }
});

module.exports = mongoose.model('Task', TaskSchema);
