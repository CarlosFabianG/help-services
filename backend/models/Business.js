const { Schema, model } = require('mongoose')

const businessSchema = new Schema(
    {
    name: String,
    imageURL: String,
    description: String,
    adress: String,
    phone: String
    },
    {
    timestamps: true,
    versionKey: false
    }
)

module.exports = model('Business', businessSchema)