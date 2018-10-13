'use strict';
var express = require('express');
var router  = express.Router();
var db      = require('./../src/database');
var fs = require('fs');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function (req, res) {
    res.render('index', { title: 'VueInvader BackEnd' });
});

router.get('/scores', function (req, res) {
    db.GetHighscores(function (err, results) {
        if (!err)
            res.send(results);
        else
            res.send({ error: true });
    });
});

router.post('/scores/add', function (req, res) {
    var data = req.body;
    db.AddHighscore(data.name, data.score, function (err, results) {
        if (!err)
            res.send(results);
        else
            res.send({ error: true });
    });
});

router.get('/shaders/:name', function (req, res) {
    var name = req.params.name;
    var shader = fs.readFileSync('./shaders/' + name);
    res.send(shader);
});

module.exports = router;
