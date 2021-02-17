require('dotenv').config();
const mongoose = require('mongoose');

// Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Console log on open
mongoose.connection.once('open', () => 
    console.log(`🔗 Connected to db: ${mongoose.connection.name} at ${mongoose.connection.host}:${mongoose.connection.port}`)
);

// Console log on error
mongoose.connection.on('error', err =>
    console.log(`🔥 Database connection error:`, err)
);

// Export
module.exports.User = require('./user');