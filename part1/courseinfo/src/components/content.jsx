import React from "react";
import { Part1 } from "./excerciseParts/part1";
import { Part2 } from "./excerciseParts/part2";
import { Part3 } from "./excerciseParts/part3";

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <div>
        <Part1 name={part1.name} excercise={part1.excercise} />
      </div>
      <div>
        <Part2 name={part2.name} excercise={part2.excercise} />
      </div>
      <div>
        <Part3 name={part3.name} excercise={part3.excercise} />
      </div>
    </div>
  );
};

export default Content;
