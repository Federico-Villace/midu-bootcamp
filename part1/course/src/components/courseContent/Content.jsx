import React from "react";

export const Content = ({ parts }) => {
  const sum = () => {
    let total = 0;
    const values = parts.map((value) => {
      total += value.exercises;
      return total;
    });
    return total;
  };

  return (
    <div>
      {parts.map((part) => {
        return (
          <div key={part.id}>
            <ul>
              <li>{part.name}</li>
              <li>{part.exercises}</li>
            </ul>
          </div>
        );
      })}

      <div>
        <strong>Total of exercises: {sum()}</strong>
      </div>
    </div>
  );
};
