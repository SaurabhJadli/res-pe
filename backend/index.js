let express = require('express')
let mongoose = require('mongoose')
const cors = require("cors");
require('dotenv').config()
const routes = require('./routes/index');
const mongoConnect = require('./models/mongoDBconnection');
const cookieParser = require('cookie-parser');
const jwtAuth = require('./middleware/jwtAuth');
const forgotPassword = require('./controllers/forgotPassword');
let app = express()
const PORT = process.env.PORT || 3000


// CORS configuration
const corsOptions = {
    origin: 'http://localhost:5173', // Your frontend origin
    credentials: true // Allow credentials
  };
  
  app.use(cors(corsOptions));
// Middleware
// app.use(cors());
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

app.post('/api/entry/forgotPassword', forgotPassword)
// app.post('/api/entry/changePassword', changePassword)

app.get('/protected', jwtAuth, (req, res) => {
    res.json({ message: `Welcome ${req.user.email}` });
  });

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})