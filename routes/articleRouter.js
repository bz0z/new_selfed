var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var articleRouter = express.Router();

articleRouter.use(bodyParser.json());

articleRouter.route('/')

.all(function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})

.get(function(req,res,next){
  res.end('Will send all the articles to you!');
})

.post(function(req, res, next){
  res.end('Will add the article: ' + req.body.title + ' with time: ' + req.body.time + ' and message: ' + req.body.message);   
    
})

.delete(function(req, res, next){
  res.end('Deleting all articles');
});

articleRouter.route('/:articleId')
.all(function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})

.get(function(req,res,next){
  res.end('Will send details of the article: ' + req.params.articleId +' to you!');
})

.put(function(req, res, next){
  res.write('Updating the article: ' + req.params.articleId + '\n');
  res.end('Will update the article: ' + req.body.name + 
  ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
  res.end('Deleting article: ' + req.params.articleId);
});

module.exports = articleRouter