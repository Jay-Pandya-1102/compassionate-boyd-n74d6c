import "./styles.css";
import React from "react";

const date = new Date();
const currentTime = date.getHours();

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good night";
}
function App() {
  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
}

export default App;
