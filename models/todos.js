// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todos = new Schema({
    time:  {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    },
    checked:  {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});


// the schema is useless so far
// we need to create a model using it
var TodoStuff = mongoose.model('Todo_stuff', todos);

// make this available to our Node applications
module.exports = TodoStuff;