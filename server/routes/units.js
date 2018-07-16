const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs/index');
const Course = require('../models/unit');
const mongoose = require("mongoose");


// display all topics in a unit
router.get('/:unitId', (req, res, next) => {
  Course.findById(req.params.unitId)
  .populate("_topics")
  .then( myUnit => {
      res.json(myUnit)
  });
});

module.exports = router;