const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

let todos = [
    {
        id: 1,
        title: "Learn Docker",
        description: "Read documentation and practice creating containers",
        priority: "high",
        createDate: new Date().toISOString()
    },
    {
        id: 2,
        title: "Set up backend API",
        description: "Implement CRUD operations for todos",
        priority: "medium",
        createDate: new Date().toISOString()
    },
    {
        id: 3,
        title: "Connect frontend to backend",
        description: "Ensure proper communication between Angular and Node.js",
        priority: "high",
        createDate: new Date().toISOString()
    }
];
let nextId = 1;

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }));

app.post('/todos', (req, res) => {
    const { title, description, priority } = req.body;

    if (!title || !priority) {
        return res.status(400).json({ message: 'Title and priority are required.' });
    }

    const newTodo = {
        id: nextId++,
        title,
        description: description || '',
        priority,
        createDate: new Date().toISOString(),
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});


app.get('/todos', (req, res) => {
    res.json(todos);
});

app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, priority } = req.body;

    const todo = todos.find(t => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ message: 'Todo not found.' });
    }

    if (title) todo.title = title;
    if (description) todo.description = description;
    if (priority) todo.priority = priority;

    res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;

    const index = todos.findIndex(t => t.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ message: 'Todo not found.' });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
