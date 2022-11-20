import React from "react";
import { Content } from "./courseContent/Content";
import { Header } from "./courseContent/Header";

export const Course = ({ course }) => {
  const { name, parts } = course;

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
    </div>
  );
};
