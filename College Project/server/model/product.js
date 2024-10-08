const mongoose  = require('mongoose');


const productSchema = mongoose.Schema({
   
    url:{
        type : String,
        required : true
    },
        company: {
            type : String,
            required : true
        },
        image: {
        type : String,
        required : true
    },
        name:{
        type : String,
        required : true
    },
        discount:{
        type : String,
        required : true
    },
        price: {
        type : String,
        required : true
    },
        size: {
        type : String,
        required : true
    },
        resolution: {
        type : String,
        required : true
    },
        os: {
        type : String,
        required : true
    },
        graphics: {
        type : String,
        required : true
    },
        ssd:{
        type : String,
        required : true
    },
        ram:{
        type : String,
        required : true
    },
        processor:{
        type : String,
        required : true
    },
})

module.exports = new mongoose.model('products' , productSchema);