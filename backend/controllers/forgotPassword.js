const userModel = require("../models/users.model");

const forgotPassword = async (req, res) => {
    try{
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User Found' });
    }
    catch(err){
        return res.status(400).json({message: 'error in finding user'})
    }
}

module.exports = forgotPassword;