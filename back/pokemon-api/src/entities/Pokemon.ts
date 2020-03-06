import { Document } from 'mongoose';

export interface Pokemon extends Document {
    readonly id_pokemon : Number,
    readonly name: {
        fr:String,
        en:String,
        ja:String,
        de:String, 
        ko:String,
        "zh-hans":String,
        "zh-hant":String,
    },
    readonly generation : Number,
    readonly enable: Boolean,
}