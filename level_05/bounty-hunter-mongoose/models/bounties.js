const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
    },
    bountyAmount: {
        type: Number,
        default: 0
    },

    kind: {
        type: String,
    },

    living: {
        type: Boolean,
    }
})

module.exports = mongoose.model("Post", bountySchema)
