let express = require('express')
const cors = require("cors");
require('dotenv').config()
const routes = require('./routes/index');
const mongoConnect = require('./models/mongoDBconnection');
const cookieParser = require('cookie-parser');
const jwtAuth = require('./middleware/jwtAuth');
const forgotPassword = require('./controllers/forgotPassword');
const changePassword = require('./controllers/changePassword');
let app = express()
const PORT = process.env.PORT || 3000


// CORS configuration
const corsOptions = {
  origin: process.env.Frontend_baseURL, // Your frontend origin
  credentials: true // Allow credentials
}

// Middleware
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json())
app.use(cookieParser());

//MongoDB Connection
mongoConnect()

//API's
app.use(routes)
// api/entry/login
// api/entry/register
// api/contact/message

app.post('/api/entry/forgotPassword', forgotPassword)
app.post('/api/entry/changePassword', changePassword)

app.get('/api/protected', jwtAuth, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT)
})