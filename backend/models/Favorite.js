const { Schema, model } = require('mongoose')
const favoriteSchema = new Schema (
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
module.exports = model('Favorite', favoriteSchema)