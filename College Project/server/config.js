const mongoose = require('mongoose')

try {
    mongoose.connect('mongodb+srv://Dhrumil1209:Maitri4412@dhrumil1209.do2eh.mongodb.net/e-comm')
    console.log("database contect");
} catch (error) {
    console.log(error)
}