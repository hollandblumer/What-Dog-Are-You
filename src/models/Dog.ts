import mongoose from "mongoose";

const DogSchema = new mongoose.Schema({
  breed: { type: String, required: true },
  personalityTraits: [String],
});

export default mongoose.model("Dog", DogSchema);
