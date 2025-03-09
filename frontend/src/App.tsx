import { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/dogs"; // ✅ Uses Vercel environment variable

function App() {
  const [breed, setBreed] = useState("");
  const [personality, setPersonality] = useState("");
  const [dogs, setDogs] = useState<
    { breed: string; personalityTraits: string[] }[]
  >([]);

  const fetchDogs = async () => {
    const res = await axios.get(API_URL);
    setDogs(res.data);
  };

  const addDog = async () => {
    await axios.post(API_URL, {
      breed,
      personalityTraits: personality.split(","),
    });
    fetchDogs(); // Refresh list
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🐶 What Dog Are You?</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Dog Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Personality (comma-separated)"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
        />
        <button onClick={addDog}>Add Dog</button>
      </div>

      <h2>Available Dogs:</h2>
      <button onClick={fetchDogs}>Load Dogs</button>
      <ul>
        {dogs.map((dog, index) => (
          <li key={index}>
            <strong>{dog.breed}</strong> - {dog.personalityTraits.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
