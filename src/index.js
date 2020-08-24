const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(routes);

app.get('/', (req, res) => res.json('healthy check ok'));

app.listen(port, () => { console.log(`App Running on port ${port}`) });

