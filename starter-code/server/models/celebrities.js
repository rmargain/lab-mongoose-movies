// 1. IMPORTACIONES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 2. SCHEMA
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
})

// 3. MODELO
const Celebrity = mongoose.model('Celebrity', celebritySchema)


// 4. EXPORTACIÓN
module.exports = Celebrity;