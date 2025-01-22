require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static('public'));

// Template engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

// Sample task storage (in-memory)
let tasks = [];

// Home route (All tasks)
app.get('/', (req, res) => {
  const current = parseInt(req.query.page || 1, 10); // Default to page 1 if not specified
  const pageSize = 10;
  const totalTasks = tasks.filter(t => !t.completed).length; // Count only non-completed tasks
  const pages = Math.ceil(totalTasks / pageSize);

  res.render('index', {
    tasks: tasks.filter(t => !t.completed).slice((current - 1) * pageSize, current * pageSize), // Non-completed tasks
    current,
    pages
  });
});

// Completed tasks route
app.get('/completed', (req, res) => {
  const current = parseInt(req.query.page || 1, 10); // Default to page 1 if not specified
  const pageSize = 10;
  const totalCompletedTasks = tasks.filter(t => t.completed).length; // Count only completed tasks
  const pages = Math.ceil(totalCompletedTasks / pageSize);

  res.render('completed', {
    tasks: tasks.filter(t => t.completed).slice((current - 1) * pageSize, current * pageSize), // Completed tasks
    current,
    pages
  });
});

// Route to mark task as completed
app.post('/complete-task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  // Find the task and mark it as completed
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
  }

  res.redirect('/'); // Redirect to the main page after completing a task
});

// Add task
app.post('/add-task', (req, res) => {
  const { title, description } = req.body;

  // Add new task to the tasks array
  const newTask = {
    id: tasks.length + 1,
    title: title,
    description: description,
    completed: false
  };

  tasks.push(newTask);

  // Redirect back to the homepage to display the updated list
  res.redirect('/');
});

// Edit task
app.post('/edit-task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description } = req.body;

  // Find and update the task
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.title = title;
    task.description = description;
  }

  res.redirect('/');
});

// Delete task
app.post('/delete-task/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  // Remove the task from the tasks array
  tasks = tasks.filter(t => t.id !== taskId);

  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
