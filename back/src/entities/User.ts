import { Document } from 'mongoose';

export interface User extends Document {
    readonly score: Number,
    readonly date: String,
    readonly name: String,
    readonly gens: {
        one: Boolean,
        two: Boolean,
        three: Boolean,
        four: Boolean,
        five: Boolean,
        six: Boolean,
        seven: Boolean,
    }
}
