var mongoose = require('mongoose'),
    assert = require('assert');

var TodoStuff = require('./todos');

// Connection URL
var url = 'mongodb://localhost:27017/todo';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected correctly to server");

    // create a new user
    var newTodo = TodoStuff({
        name: 'Uthapizza',
        description: 'Test'
    });

    // save the user
    newTodo.save(function (err) {
        if (err) throw err;
        console.log('Todo created!');

        // get all the users
        TodoStuff.find({}, function (err, dishes) {
            if (err) throw err;

            // object of all the users
            console.log(dishes);
                        db.collection('dishes').drop(function () {
                db.close();
            });
        });
    });
});