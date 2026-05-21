const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

const userRoutes = require('./routes/userRoutes');

app.use('/', userRoutes);

module.exports = app;