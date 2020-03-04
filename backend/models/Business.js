const { Schema, model } = require('mongoose')

const businessSchema = new Schema(
    {
    name: String,
    imageURL: String,
    address: String,
    phone: String,
    category: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    },
    {
    timestamps: true,
    versionKey: false
    }
)

module.exports = model('Business', businessSchema)