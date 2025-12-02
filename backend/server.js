const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Servir le frontend
app.use(express.static(path.join(__dirname, '../frontend')));

let tasks = []; // Tableau pour stocker les tâches

// Récupérer toutes les tâches
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Ajouter une tâche
app.post('/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push({ id: tasks.length + 1, task });
    res.status(201).json({ message: 'Tâche ajoutée!' });
  } else {
    res.status(400).json({ message: 'Tâche vide!' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend démarré sur http://localhost:${PORT}`);
});
