import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    auth0Id:{type: String, required: true, unique: true},
    name: String,
    email: String,
    picture: String,
    createdAt: {type: Date, default: Date.now}
})

export const User = mongoose.model("User", userSchema);