const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const folderRouter = require('./routes/api/folders');

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
require('./config/database');
   
const app = express();
   
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/checkToken'));

// Define api routes below
app.use('/api/users', require('./routes/api/users'));
app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.use('/api/folders', folderRouter);


const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`);
});