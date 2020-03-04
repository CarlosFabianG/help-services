const { Schema, model } = require('mongoose')

const businessSchema = new Schema(
    {
    name: String,
    imageURL: String,
    description: String,
    address: String,
    phone: String,
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