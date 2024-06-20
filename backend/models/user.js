import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    travel: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Travel' }]
});

const User = mongoose.model('User', userSchema);

export default User;
