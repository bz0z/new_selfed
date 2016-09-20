var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var groupRouter = express.Router();

groupRouter.use(bodyParser.json());

groupRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send all the groups to you!');
})

.post(function(req, res, next){
    res.end('Will add the group: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all groups');
});
groupRouter.route('/:groupId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the group: ' + req.params.groupId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the group: ' + req.params.groupId + '\n');
    res.end('Will update the group: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting group: ' + req.params.groupId);
});

module.exports = groupRouter