var mongoose = require('mongoose');

var AirlineSchema = new mongoose.Schema({
    name:{
        unique:true,
        type:String,
        required:true
    },
    iata:{
        unique:true,
        type:String,
        required:true
    }
});

module.exports = mongoose.model('airline',AirlineSchema);