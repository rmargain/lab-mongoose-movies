// 1. IMPORTACIONES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2. SCHEMA
const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{type: Schema.Types.ObjectId, ref: 'Celebrity'}]
})

// 3. MODELO
const Movie = mongoose.model('Movie', movieSchema)


// 4. EXPORTACIÓN
module.exports = Movie;