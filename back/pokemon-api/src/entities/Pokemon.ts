import { Document } from 'mongoose';

export interface Pokemon extends Document {
    readonly _id_pokemon : Number,
    readonly name: {
        Fr:String,
        En:String,
        SP:String,
        DE:String,
    },
    readonly generation : Number,
    readonly enable: Boolean,
}