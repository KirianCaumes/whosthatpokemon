import * as mongoose from 'mongoose';
mongoose.set('useCreateIndex', true);

export const UserSchema = new mongoose.Schema({
    score: Number,
    date: String,
    name: String,
    gens: {
        one: Boolean,
        two: Boolean,
        three: Boolean,
        four: Boolean,
        five: Boolean,
        six: Boolean,
        seven: Boolean,
    },
})
