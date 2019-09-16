let Student = require('../models/Student')

module.exports = {
    addNewStudent: function (req, res) {
        Student.create(req.body, function (err) {
            if (err) {
                res.status(500)      // this is the error type that will appear if there is an error 
                return
            }
            res.status(201).json({
                msg: "New Student added successfully"

            })

        })
    },
    getAllstudents: function (req, res) {
        Student.find().exec(function (err, data) {
            res.status(200).json(data)

        })
    }

}