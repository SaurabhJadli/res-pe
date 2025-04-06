const jwt = require('jsonwebtoken');
const userModel = require("../models/users.model");

let login = async (req, res) => {            // Login API
    try {
        let { email, password } = req.body
        const user = await userModel.findOne({
            email,
            password
        })
        if (user) {
            const payload = {
                id: user._id,
                email: user.email
              };
          
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '1h'
              });
          
            // return res.cookie('token', token, {
            //     httpOnly: true,
            //     // secure: true,         // only over HTTPS , Set to true in production (HTTPS)
            //     // sameSite: 'Strict',   // prevent CSRF
            //     // maxAge: 24 * 60 * 60 * 1000
            //   })
            res.status(200).json({ 
                token: token, 
                message: 'Login successful' 
              })            
            }
        else {
           return res.status(404).json({ message: "User not found!" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to login" });
        console.log('Error logging in')
    }
}

module.exports = login