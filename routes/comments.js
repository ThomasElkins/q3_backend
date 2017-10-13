var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`select * from comments`)
    .then(function(comments) {
      res.send(comments.rows)
    })
});

module.exports = router;
