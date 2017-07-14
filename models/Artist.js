// Artist model here...
const mongoose = require('mongoose')

const artistschema = new mongoose.Schema({
  name: String,
  albums: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album' //name of Album model
  }] //id of this album, is referring to an album
})

const Artist = mongoose.model('Artist', artistSchema)
module.exports = Artist
