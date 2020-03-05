const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/email',{useNewUrlParser : true},(err) =>{
    if(!err)console.log('connected to mongodb');
    else console.log(err);
});

const todo = require('./workout.model')