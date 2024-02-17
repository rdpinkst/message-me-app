const mongoose = require('mongoos');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    friends: [{ type: String }],
    chats: [{ 
        friend: { type: String },
        messages: [{
            author: { type: String },
            message: { type: String },
            timeStamp: { type: Date, default: Date.now }
        }]
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);