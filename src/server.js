'use strict';

const express = require('express');
const cors = require('cors');
const notFoundHandler = require('./middleware/errorMiddleware/404.js')
const errorHandler = require('./middleware/errorMiddleware/500.js')
const authRoutes = require('./routes/auth.js')

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(authRoutes);
app.use('*', notFoundHandler)
app.use(errorHandler)

module.exports = {
  app: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Now connected on port: ${port}`);
    });
  }
}