var Datastore = require('nedb');
console.log(__dirname + '\scores.db');
var db = new Datastore({ filename: __dirname+'/scores.db', autoload: true });
var _ = require('underscore');

module.exports = {

    GetHighscores: function (cb) {
       
        db.find({}, function (err, docs) {
            if (docs.length > 0) {
                docs = _.sortBy(docs, function (o) { return o.score; }).reverse();
            }
            cb(err, docs);
        });
    },
    AddHighscore: function(name, score, cb) {

        db.insert({
            score: score,
            name: name
        }, function (err, newDoc) {
            cb(err, newDoc);
        });
    }

};