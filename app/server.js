const express = require('express');
const app = express();
const PORT = 3000;
const tarefasRoutes = require('./routes/tarefasRoutes');

// Middleware global de log 
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

// Rotas de tarefas
app.use('/tarefas', tarefasRoutes);

// Rota principal 
app.get('/', (req, res) => {
  res.send('API de Tarefas de Alexandre César no ar! (2026 A.D.)');
});

// Middleware de tratamento de erros (último)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
