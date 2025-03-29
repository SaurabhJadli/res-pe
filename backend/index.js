let express = require('express')
let mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config()
const routes = require('./routes/index')
let app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000


// Middleware
app.use(cors());

//MongoDB Connection
mongoose.connect(process.env.DBurl)
    .then(() => {
        console.log('Connected to Database')
    })
    .catch((err) => {
        console.log('Error connecting to Database')
    })

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})

//API's
// app.post('/user', register)
// app.post('/user/login', login)
 app.use(routes)
// api/entry/login
// api/entry/register

