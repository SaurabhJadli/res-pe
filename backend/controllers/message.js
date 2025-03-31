const messageModel = require('../models/message.model');

let message = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        const newMessage = new messageModel({
            name,
            email,
            subject,
            message
        })
        await newMessage.save()
        res.status(200).json({ message: 'Message sent successfully!' })
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to send message' })
        console.log('Error sending message')
    }
}

module.exports = message