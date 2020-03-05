const mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
    name:{
        type: String
    },
    phone:{
        type: Number
    },
    email:{
        type: String
    },
    company:{
        type: String
    },
    morning:{
        type: String
    },
    evening:{
        type: String
    },
    studies:{
        type: String
    },
})

mongoose.model('todo',workoutSchema)

