const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likedUsers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    dislikedUser: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: {
        type: Array,
        default: [],
    },
})


module.exports = mongoose.model('Issue', issueSchema);
