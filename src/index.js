const express = require('express');
const routes = require('./routes');

const app = express()
const port = 3000;

app.use(express.json())
app.use(routes);

app.get('/', (req, res) => res.json('healthy check ok'));

app.listen(port, () => { console.log(`App Running on port ${port}`) });

