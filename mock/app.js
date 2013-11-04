'use strict'
var USE_REALSERVER = false;
var $ = require("jquery");
var http = require("http"),
    request = require("request"),
    express = require("express"),
    path = require('path'),
    phpExpress = require('php-express')({
            binPath: '/usr/bin/php' // php bin path.
        });

var app = express();

//common configurations
app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.methodOverride());
    app.set("views",path.join(__dirname, '../'));
    app.engine('php', phpExpress.engine);
    app.set('view engine', 'php');
   // app.use(express.logger());
});

app.configure('development', function(){
    app.use(express.logger('dev'));
    /* need to indicate the directory you will be serving */
    app.use(express.static('../'));
    app.use(express.errorHandler());
});

/* start of mocking routes */

// app.post("/phpdb/phyloExpertDB.php",function(req, res){
//    res.send(200);
// });

/* Example of mocking http GET */
app.get("/", function(req, res){
    /* return your desired response */
    // using either res.send() or res.json()
    res.json({});
});
/* Example of mocking http POST */
app.post("/", function(req, res){
    /* return your desired response */
    // using either res.send() or res.json()
    res.json({});
});

/* Example of mocking http PUT */
app.put("/", function(req, res){
    /* return your desired response */
    // using either res.send() or res.json()
    res.json({});
});

/* Example of mocking http DELETE */
app.delete("/", function(req, res){
    /* return your desired response */
    // using either res.send() or res.json()
    res.json({});
});

//set server to listen to ...
http.createServer(app).listen(app.get('port'), function(){
    console.info('Express server listening on port '+ app.get('port'));
});
