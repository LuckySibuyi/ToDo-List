const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

exports.homepage = async (req, res) => {
   res.render('index');
}