let express = require('express')
let mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config()
const routes = require('./routes/index');
const mongoConnect = require('./models/mongoDBconnection');
const cookieParser = require('cookie-parser');
const jwtAuth = require('./middle/jwtAuth');
let app = express()
const PORT = process.env.PORT || 3000


// Middleware
app.use(cors());
app.use(express.json())
app.use(cookieParser());


//MongoDB Connection
mongoConnect()


//API's
// app.post('/user', register)
// app.post('/user/login', login)
 app.use(routes)
// api/entry/login
// api/entry/register
// api/contact/message

  app.get('/logout', (req, res) => {
    res.clearCookie('token')
    .redirect("http://localhost:5173/login")

  });

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})