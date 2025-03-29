const userModel = require("../models/users.model");

let login = async (req, res) => {            // Login API
    try {
        let { email, password } = req.body
        const user = await userModel.findOne({
            email,
            password
        })
        if (user) {
           return res.status(200).json({ message: "User logged in successfully!" });
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