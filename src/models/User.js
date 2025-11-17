import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    auth0Id:{type: String, required: true, unique: true},
    given_name: String,
    family_name: String,
    nickname: String,
    name: String,
    email: String,
    picture: String,
    updated_at: Date,
    email_verified: Boolean,
    createdAt: {type: Date, default: Date.now}
})

export const User = mongoose.model("User", userSchema);