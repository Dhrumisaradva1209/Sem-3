const mongoose  = require('mongoose');

const dataSchema = mongoose.Schema({
    firstname:{
        type : String,
        require : true
    },
    lastname:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    pass:{
        type : String,
        require : true
    },
    phone:{
        type : String,
        require : true
    },
    address:{
        type : String,
        require : true
    },
})

module.exports = new mongoose.model('userDatas', dataSchema);