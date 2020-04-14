//TODO: STEP 1 - Import the useState hook.
import React, {useState }  from "react";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // home team score
  const [home, setHome] = useState(0)

  //away team score

  const [away, setAway] = useState(0)

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow home = {home} away = {away} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={ev => setHome(home + 7) } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={ev => setHome(home + 3) } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={ev => setAway(away + 7) } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={ev => setAway (away + 7) } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
