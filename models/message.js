const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    inbox_id: { type: Schema.Types.ObjectId, ref: 'Inbox' },
    author_id: { type: Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, required: true },
}, {
    timestamps: true,
})

module.exports = mongoose.model('Message', MessageSchema);