var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw(`select * from comments`)
    .then(function(comments) {
      res.send(comments.rows)
    })
})

router.post('/', function(req, res, next) {
  knex('comments').insert({
    user_name: req.body.user_name,
    city: req.body.city,
    hike_name: req.body.hike_name,
    comment: req.body.comment
  }).then(function() {
    knex('comments').select()
    .then(function(){
      res.redirect('/comments')
    })
  })
})

module.exports = router;
