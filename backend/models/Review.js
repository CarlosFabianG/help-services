const { Schema, model } = require('mongoose')

const reviewSchema = new Schema (
    {
        name: String,
        imageURL: String,
        description: String
    },
    {
        timestamps: true,
        versionKey: false
      }
    );
    module.exports = model('Review', reviewSchema)