const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

module.exports = app;