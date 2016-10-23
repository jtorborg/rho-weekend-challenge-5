const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = require('express').Router();
const pg = require('pg');

var config = {
    database: 'rho'
};

// initialize the database connection pool
var pool = new pg.Pool(config);
//~~~~~~~~~~~~

console.log('inside favoriteroute.js');
router.post('/', function(req, res) {

    pool.connect(function(err, client, done) {

        if (err) {
            console.log('Error connecting the DB', err);
            res.sendStatus(500);
            done();
            return;

        } //end of if statement
        console.log("req body", req.body);
        client.query('INSERT INTO favorites (comments, pic) VALUES($1, $2) returning *', [req.body.comments, req.body.pic], function(err, result) {
            done();
            if (err) {
                console.log('err', err);
                res.sendStatus(500);
                return;
            } //end of if

            res.send(result.rows); //!!!@@@send back to AJAX success
        }); //end of client query
    }); //end pool connect

}); //end of router post

router.get('/', function(req, res){

    pool.connect(function(err, client, done){
        if(err){
            console.log('Error connecting to the DB', err);
            res.sendStatus(500);
            done();
            return;
        }

        client.query('SELECT * FROM favorites', function(err, result){
            done();
            if(err){
                console.log('Error querying the DB', err);
                res.sendStatus(500);

                return;
            }

        console.log('Got rows from the DB:',result.rows);
        res.send(result.rows);

        });

    });
});



//~~~~~~~~~~~~

module.exports = router;
