import React from "react";

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
        <h4>{firstTitle}</h4>
        <label>{firstValue}</label>
      </div>
      <div>
        <h4>{secondTitle}</h4>
        <label>{secondValue}</label>
      </div>
      <div>
        <h4>{thirdTitle}</h4>
        <label>{thirdValue}</label>
      </div>
    </div>
  );
};

export default Content;
