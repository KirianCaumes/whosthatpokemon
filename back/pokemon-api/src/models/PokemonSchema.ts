const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);

export const PokemonSchema = new mongoose.Schema({
    _id_pokemon: {
        type: Number,
        index: true,
        unique: true
      },
    name: {
        Fr:String,
        En:String,
        SP:String,
        DE:String,
    },
    generation : Number,
    enable: Boolean,
})