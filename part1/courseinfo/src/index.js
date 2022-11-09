import React from "react";
import ReactDOM from "react-dom";
import Content from "./components/content";
import Header from "./components/header";
import Total from "./components/total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={{
          name: course.parts[0].name,
          excercises: course.parts[0].exercises,
        }}
        part2={{
          name: course.parts[1].name,
          excercises: course.parts[1].exercises,
        }}
        part3={{
          name: course.parts[2].name,
          excercises: course.parts[2].exercises,
        }}
      />
      <Total
        result={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
