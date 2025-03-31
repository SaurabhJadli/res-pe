const mongoose = require('mongoose')

const mongoConnect = async() => {
    try {
        await mongoose.connect(process.env.DBurl)
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection failed:', error)
    }
}

module.exports = mongoConnect