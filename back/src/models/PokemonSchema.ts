import * as mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);

export const PokemonSchema = new mongoose.Schema({
    id_pokemon: {
        type: Number,
        index: true,
        unique: true
      },
    name: {
        fr:String,
        en:String,
        ja:String,
        de:String,
        ko:String,
        "zh-hans":String,
        "zh-hant":String,
    },
    generation : Number,
    enable: Boolean,
})