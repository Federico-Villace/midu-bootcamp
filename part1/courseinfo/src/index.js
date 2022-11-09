import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        firstValue={exercises1}
        secondTitle={part2}
        secondValue={exercises2}
        thirdTitle={part3}
        thirdValue={exercises3}
      />
      <Total result={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
