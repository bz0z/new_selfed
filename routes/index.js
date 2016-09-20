var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var operations = require('../models/todos_operations')
var router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router
.all('/', function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})
//get all articles
.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
//get task generator
.get('/add_task', function(req, res, next) {
	res.sendFile(path.resolve(__dirname+'/../public/add_task.html'))
	
})
//post requests
.post('/task_server', function(req, res, next){
  res.end(req.body.title + ' at ' + req.body.time + " do this " + req.body.message)
  //operations.add_task()
})
//check some special todo
.get('/:id', function(req, res, next) {
	res.write('You will see some articles right here')
	res.end()
})
//edit todo
.put('/:id', function(req, res, next){
  res.write('Updating the article: ' + req.params.articleId + '\n');
  res.end('Will update the article: ' + req.body.name + 
  ' with details: ' + req.body.description);
})
//delete todo
.delete('/:id', function(req, res, next){
  res.end('Deleting article: ' + req.params.articleId);
})




module.exports = router;
