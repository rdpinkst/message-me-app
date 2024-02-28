const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InboxSchema = new Schema({
    chatter_one: { type: Schema.Types.ObjectId, ref: 'User' },
    chatter_two: { type: Schema.Types.ObjectId, ref: 'User' },
})

module.exports = mongoose.model('Inbox', InboxSchema);