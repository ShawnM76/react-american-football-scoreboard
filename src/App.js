//TODO: STEP 1 - Import the useState hook.
// import React from "react";
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Home from "./Components/Home";
import Away from "./Components/Away";
import HomeButtons from "./Components/HomeButtons";
import AwayButtons from "./Components/AwayButtons";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setScore1] = useState(0);
  const [awayScore, setScore2] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <Home homeScore={homeScore} />
           
          <div className="timer">00:03</div>
          <Away awayScore={awayScore} />
         
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <HomeButtons homeScore={homeScore} />
        <AwayButtons awayScore={awayScore} />
     
      </section>
    </div>
  );
}

export default App;
