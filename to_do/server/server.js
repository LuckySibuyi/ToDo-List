// __define-ocg__ Simple To-Do List App with Node.js and Express
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Store tasks in memory
let varOcg = [];

// Serve static files (CSS and client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON requests
app.use(express.json());

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get tasks
app.get('/api/tasks', (req, res) => {
  res.json(varOcg);
});

// API endpoint to add a task
app.post('/api/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    varOcg.push(task);
    res.status(201).json({ success: true, message: 'Task added!' });
  } else {
    res.status(400).json({ success: false, message: 'Task cannot be empty!' });
  }
});

// API endpoint to delete a task
app.delete('/api/tasks/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < varOcg.length) {
    varOcg.splice(index, 1);
    res.json({ success: true, message: 'Task removed!' });
  } else {
    res.status(404).json({ success: false, message: 'Task not found!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`To-Do List app running at http://localhost:${port}`);
});
