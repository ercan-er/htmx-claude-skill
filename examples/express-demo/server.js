const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory store (replace with database in production)
let todos = [
  { id: 1, title: 'Learn HTMX', completed: false },
  { id: 2, title: 'Build awesome app', completed: false }
];
let nextId = 3;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Helper: Check if request is HTMX
const isHtmxRequest = (req) => req.headers['hx-request'] === 'true';

// Routes

// Home page
app.get('/', (req, res) => {
  res.render('index', { todos });
});

// Get todos fragment (for HTMX requests)
app.get('/todos', (req, res) => {
  if (isHtmxRequest(req)) {
    res.render('_todo_list', { todos });
  } else {
    res.redirect('/');
  }
});

// Add todo
app.post('/todos', (req, res) => {
  const { title } = req.body;
  
  // Validation
  if (!title || title.trim().length === 0) {
    return res.status(422).render('_todo_form', {
      errors: ['Title is required'],
      values: req.body
    });
  }
  
  const todo = {
    id: nextId++,
    title: title.trim(),
    completed: false
  };
  
  todos.push(todo);
  
  // Return fragment for HTMX
  if (isHtmxRequest(req)) {
    res.render('_todo_item', { todo });
  } else {
    res.redirect('/');
  }
});

// Toggle todo completion
app.patch('/todos/:id/toggle', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  
  if (!todo) {
    return res.status(404).send('Todo not found');
  }
  
  todo.completed = !todo.completed;
  
  if (isHtmxRequest(req)) {
    res.render('_todo_item', { todo });
  } else {
    res.redirect('/');
  }
});

// Delete todo
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).send('Todo not found');
  }
  
  todos.splice(index, 1);
  
  if (isHtmxRequest(req)) {
    res.status(200).send(''); // Empty response for delete
  } else {
    res.redirect('/');
  }
});

// Flash messages endpoint (for demo)
app.get('/flash', (req, res) => {
  const message = req.query.message || 'Operation successful!';
  res.render('_flash', { message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('HTMX Express Demo');
});
