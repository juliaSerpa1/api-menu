const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const complementRoutes = require('./routes/complementRoutes');
const proteinRoutes = require('./routes/proteinRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/complement', complementRoutes);
app.use('/proteins', proteinRoutes);
app.use('/orders', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});