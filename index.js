const express = require('express');
const cors = require('cors');
const app = express();
require('./config/db_config');
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/recipe', recipeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});