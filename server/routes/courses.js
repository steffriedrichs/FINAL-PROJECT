const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs/index');
const Course = require('../models/course');
const mongoose = require("mongoose");

// Route to get all courses:
router.get('/', (req, res, next) => {
  Course.find()
    .then(courses => {
      res.json(courses);
    })
    .catch(error => next(error));
});

// display a single course:
router.get('/:courseId', (req, res, next) => {
  let courseId = req.params.courseId;  
  Course.findById(courseId)
  .populate("_units")  //get the objects in the array instead of the ids only
  .then( myCourse => {
      res.json(myCourse)
  });
});

module.exports = router;