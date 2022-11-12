import React, { useState } from "react";

const Scores = ({ good, bad, neutral }) => {
  const setAverage = () => {
    const sum = good;
    const rest = bad;
    const average = (sum - rest) / setTotal();
    return average;
  };

  const setTotal = () => {
    const total = good + bad + neutral;
    return total;
  };

  const setPositives = () => {
    const positives = good / setTotal();
    return positives;
  };

  return good === 0 && bad === 0 && neutral === 0 ? (
    <h4>No feedback given</h4>
  ) : (
    <ul>
      <li>
        <h3>Good:{good}</h3>
      </li>
      <li>
        <h3>Bad:{bad}</h3>
      </li>
      <li>
        <h3>Neutral:{neutral}</h3>
      </li>
      <li>
        <h3>All:{setTotal()}</h3>
      </li>
      <li>
        <h3>Average:{setAverage()}</h3>
      </li>
      <li>
        <h3>Positive:{setPositives()}</h3>
      </li>
    </ul>
  );
};

export default Scores;
