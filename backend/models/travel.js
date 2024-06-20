import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    photo: String,
    culture: Boolean,
    move: Number,
    security: Number,
    population: Number,
    flora: Number,
    
});

const Travel = mongoose.model('Travel', TravelSchema);

export default Travel;
