// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
// Create database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });
// Create schema
const commentSchema = new mongoose.Schema({
  id: Number,