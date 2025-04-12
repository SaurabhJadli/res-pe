const registrationSchema = require("../middleware/registerValidation");
const userModel = require("../models/users.model");

let register = async (req, res) => {                 // Registration API 
    try {
        // Validate the request body
        await registrationSchema.validateAsync(req.body);

        let { name, email, password, confirmPassword } = req.body

        const emailVerification = await userModel.findOne({
            email,
        });

        if (emailVerification) {
            return res.status(200).json({
                success: false,
                message: "User Exist already",
            });
        }

        let user = new userModel({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        })
        console.log(user)
        await user.save()
        res.status(200).json({ message: "Registration successful!" });
        console.log('User Created')

    }
    catch (error) {
        if (error.isJoi) {
            return res.status(400).json({ error: error.details[0].message });
        }
        return res.status(500).json({ error: "Failed to save user" });
        console.log('Error creating user')
    }
}

module.exports = register