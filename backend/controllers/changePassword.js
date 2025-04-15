const userModel = require("../models/users.model");

const changePassword = async (req, res) => {
    try {
        const { email, newPassword, confirmPassword } = req.body
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'Password and confirm password do not match' });
        }

        // Update the user's password
        const user = await userModel.findOne({
            email: email,
            });

            user.password = newPassword;
        await user.save();
        return res.status(200).json({ message: 'Password changed successfully' });

    }
    catch (error) {
        return res.status(400).json({ message: 'error while changing password' })
    }
}

module.exports = changePassword;