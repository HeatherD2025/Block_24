import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [puppies] = useState(puppyList);
  const [puppy, setPuppy] = useState({});
  const newPuppy = (id) => {
    const featuredPup = puppies.find((element) => element.id === id);
    setPuppy(featuredPup);
  };

// if else function here for dog tricks array?

  return (
    <div
      className="background"
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1154954591/photo/creative-collage-of-different-breeds-of-dogs-on-colorful-background.jpg?s=612x612&w=0&k=20&c=-_iwy8ZEGH1Zt7AfkanMJFJDuj11tw2bTRqkJgjKhfo=")',
        backgroundRepeat: "repeat",
        width: "100%",
        height: "972px",
      }}
    >
      <div className="boxForPuppyNames">
      <div>{puppy.name}</div>
      <div>{puppy.id}</div>
      <div>{puppy.age}</div>
      <div>{puppy.ownerId}</div>
      <div>{puppy.email}</div>
      <br></br>
        {puppies.map((puppy) => {
          return (
            <div
              key={puppy.id}
              onClick={() => {
                newPuppy(puppy.id);
              }}
            >
              {puppy.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
