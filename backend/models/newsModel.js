const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const newSchema = Schema({
    doc: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    type: {
        type: String,
        required: true,
    },
    descr: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    image:String,
},  {
    timestamps: true
})

const New = mongoose.model('New', newSchema)

module.exports = New