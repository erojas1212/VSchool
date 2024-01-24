const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User", 
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("Comment", commentSchema);
