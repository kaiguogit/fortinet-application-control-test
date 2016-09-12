"use strict";

const express = require('express');
const router  = express.Router();
const data = require('../data.js');

router.get("/", (req, res) => {
  res.render('index', {signatures: data});
});

router.get("/:id", (req, res) => {
  res.render('show', {signature: data[req.params.id]});
});

module.exports = router;