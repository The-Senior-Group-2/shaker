const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const clientPath = path.resolve(__dirname, '../client/dist');

const app = express();

const PORT = 8080;
app.use(express.json());
app.use(urlencoded({extended: true}));

app.use('/', express.static(clientPath));


app.listen(PORT);

