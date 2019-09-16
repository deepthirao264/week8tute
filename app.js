let expres = require('express')
let app = express()

app.listen(8085)

let mongoose = require('mongoose')
let url = "mongodb://localhost27017/WEEK8"
mongoose.connect(url, function (err) {
    if (err) throw err
    console.log("DB connected successfully");

})

// DESIGN ROUTER BELOW
let StudentRoute = require('./router/student')
let SchoolRoute = require('/router/school')

// add student
app.post('/student', StudentRoute.addNewStudent)

// get student 
app.get('/student', StudentRoute.getAllstudents)

// add school
app.post('/school', SchoolRoute.addNewSchool)

// get school 
app.get('/school', SchoolRoute.getAllSchools)

// add a student to school 
app.post('/school/addstudent/:scId')

