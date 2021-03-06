const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs/index');
const Topic = require('../models/topic');
const mongoose = require("mongoose");


router.get('/:topicId', (req, res, next) => {
  Topic.findById(req.params.topicId)
  .then( myTopic => {
      res.json(myTopic)
  })
  .catch(error => next(error));
});

router.get('/:topicId/training', (req, res, next) => {
  Topic.findById(req.params.topicId)
  .populate("_trainingExercises")
  .then( myTopic => {
      res.json(myTopic)
  })
  .catch(error => next(error));
});

router.get('/:topicId/test', (req, res, next) => {
  Topic.findById(req.params.topicId)
  .populate("_testExercises")
  .then( myTopic => {
      res.json(myTopic)
  })
  .catch(error => next(error));
});

module.exports = router;