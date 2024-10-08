const mongoose  = require('mongoose');

const adminSchema = mongoose.Schema({
    email:{
        type : String,
        require : true
    },
    pass:{
        type : String,
        require : true
    },
 
})

module.exports = new mongoose.model('admins', adminSchema);