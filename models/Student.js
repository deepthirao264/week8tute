let mongoose = require("mongoose")

let studentSchema = mongoose.Schema({

    name: String,
    age: Number

})

// export the model 
let student = mongoose.model('Student', studentSchema)

module.exports = studentModel;



