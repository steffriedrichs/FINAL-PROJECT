const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs/index');
const Unit = require('../models/unit');
const mongoose = require("mongoose");

router.get('/:unitId', (req, res, next) => {
  Unit.findById(req.params.unitId)
  .populate("_topics")
  .then( myUnit => {
      res.json(myUnit)
  });
});

module.exports = router;