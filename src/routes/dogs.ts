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
  const newDog = new Dog(req.body);
  await newDog.save();
  res.json(newDog);
});

export default router;
