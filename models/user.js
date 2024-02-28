const mongoose = require('mongoos');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    last_on: { type: Date, default: Date.now() }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema);