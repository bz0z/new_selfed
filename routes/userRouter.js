var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the users to you!');
})

.post(function(req, res, next){
    res.end('Will add the user: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all users');
});
userRouter.route('/:userId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the user: ' + req.params.userId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the user: ' + req.params.userId + '\n');
    res.end('Will update the user: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting user: ' + req.params.userId);
});

module.exports = userRouter