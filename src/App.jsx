import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import { createRoot } from "react-dom/client";

root.render;

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        const featuredPup = puppies.find((pup) => pup.id === featPupId);
        console.log(featuredPup);
        {
          featPupId && (
            <div>
              <h2>{featPupId.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          );
        }
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
