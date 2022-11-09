import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    excercise: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    excercise: 7,
  };
  const part3 = {
    name: "State of a component",
    excercise: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total result={part1.excercise + part2.excercise + part3.excercise} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
