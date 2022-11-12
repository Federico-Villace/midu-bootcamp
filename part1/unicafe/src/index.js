import React, { useState } from "react";
import ReactDOM from "react-dom";
import Scores from "./components/Scores";
import StateButtons from "./components/StateButtons";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <StateButtons
        setGood={() => setGood(good + 1)}
        setBad={() => setBad(bad + 1)}
        setNeutral={() => setNeutral(neutral + 1)}
      />
      <h2>Statics</h2>
      <Scores good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
