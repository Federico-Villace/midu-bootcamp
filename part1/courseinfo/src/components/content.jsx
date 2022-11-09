import React from "react";
import { Part1 } from "./excerciseParts/part1";
import { Part2 } from "./excerciseParts/part2";
import { Part3 } from "./excerciseParts/part3";

const Content = ({
  firstTitle,
  firstValue,
  secondTitle,
  secondValue,
  thirdTitle,
  thirdValue,
}) => {
  return (
    <div>
      <div>
        <Part1 firstTitle={firstTitle} firstValue={firstValue} />
      </div>
      <div>
        <Part2 secondTitle={secondTitle} secondValue={secondValue} />
      </div>
      <div>
        <Part3 thirdTitle={thirdTitle} thirdValue={thirdValue} />
      </div>
    </div>
  );
};

export default Content;
