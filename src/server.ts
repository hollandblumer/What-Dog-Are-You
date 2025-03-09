import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dogRoutes from "./routes/dogs";

dotenv.config();
const app = express();
app.use(express.json());
app.use(require("cors")());
app.use("/api/dogs", dogRoutes);

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Dog Predictor API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
