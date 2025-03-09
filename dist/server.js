"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const dogs_1 = __importDefault(require("./routes/dogs"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(require("cors")());
app.use("/api/dogs", dogs_1.default);
const PORT = process.env.PORT || 5001;
// Connect to MongoDB
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB Connection Error:", err));
app.get("/", (req, res) => {
    res.send("Dog Predictor API is running...");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
