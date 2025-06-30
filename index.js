const express = require('express');
const cors = require('cors');
const app = express();
require('./config/db_config');
const recipeRoutes = require('./routes/recipeRoutes');

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/', recipeRoutes);


app.listen(process.env.PORT || 3000 , () => {
  console.log(`Server started running!`);
});