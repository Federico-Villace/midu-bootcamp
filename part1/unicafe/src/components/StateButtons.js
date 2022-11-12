import React from "react";

const StateButtons = ({ setGood, setBad, setNeutral }) => {
  return (
    <div>
      <button onClick={() => setGood()}>good</button>
      <button onClick={() => setBad()}>bad</button>
      <button onClick={() => setNeutral()}>neutral</button>
    </div>
  );
};

export default StateButtons;
