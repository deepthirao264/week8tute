let mongoose = require("mongoose")

let schoolSchema = mognoose.Schema({

    name: String,
    address: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        // reference it to the model - student
        ref: "Student"
    }]

})

let schoolModel = mongoose.Model("School", studentSchema)

// export the model
module.exports = schoolModel;