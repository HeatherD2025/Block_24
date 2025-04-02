import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);

  return (
    <div
      className="App"
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1154954591/photo/creative-collage-of-different-breeds-of-dogs-on-colorful-background.jpg?s=612x612&w=0&k=20&c=-_iwy8ZEGH1Zt7AfkanMJFJDuj11tw2bTRqkJgjKhfo=")',
        backgroundRepeat: "repeat",
        width: "100%",
        height: "972px",
      }}
    >
      <div className="boxForPuppyNames" style={{ paddingTop: "100px" }}>
        {puppies.map((puppy) => {
          return <p onClick={() => { 
            setFeatPupId(puppy.id)}}
            key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;
          <p key={puppy.id}>{puppy.name}</p>;

      </div>
    </div>
  );
}

export default App;
