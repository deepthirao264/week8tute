let School = require('../models/School')
let Student = require('../models/Student')

module.exports = {
    // get all schools 
    getAllSchools: (req, res) => {
        School.find().populate('students').exec(err); {
            if (err)
                console.log(err)
            res.status(200).json(data)

        }
    },

    // add school
    addNewSchool: (req, res) => {
        School.create(req.body, (err) => {   // create is a shortcut to create new objects 
            if (err)
                console.log(err)
            res.status(200).json({
                msg: "New School added successfully"

            })

        })

    }
}

// adding student to school 
addStudent: (req, res) => {
    let schoolId = req.params.scId;
    let studentId = req.body.stId;  // use post method to get the student id 

    Student.findById(studentId, (err, student) => {
        if (err)
            res.status(500).json(err)
        return

    })

    School.findById(schoolId, (err, school) => {
        if (err) {
            res.status(500).json(err)
            return
        };
        school.students.push(student);
        school.save((err, obj) => {
            if (err)
                res.status(500).json(err)
            return

        })
        res.redirect('/ school')


    })


}
