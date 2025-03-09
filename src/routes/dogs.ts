import express from "express";
import Dog from "../models/Dog";

const router = express.Router();

// Get all dogs
router.get("/", async (req, res) => {
  const dogs = await Dog.find();
  res.json(dogs);
});

// Get a dog by ID
router.get("/:id", async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  res.json(dog);
});

// Add a new dog
router.post("/", async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    await newDog.save();
    res.json(newDog);
  } catch (error) {
    console.error("Error saving dog:", error);
    res.status(500).json({ error: "Error saving dog" });
  }
});

export default router;
