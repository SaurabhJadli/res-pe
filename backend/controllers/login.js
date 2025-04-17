const jwt = require('jsonwebtoken');
const userModel = require("../models/users.model");
const loginSchema = require('../middleware/loginValidation');

let login = async (req, res) => {            // Login API
    try {
        // Validate the request body
        await loginSchema.validateAsync(req.body);
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
        if (error.isJoi) {
            return res.status(400).json({ error: error.details[0].message });
        }
        return res.status(500).json({ error: "Failed to login" });
        console.log('Error logging in')
    }
}

module.exports = login