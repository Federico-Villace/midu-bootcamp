import React from "react";
import { Content } from "./courseContent/Content";
import { Header } from "./courseContent/Header";

export const Courses = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            {" "}
            <Header name={course.name} />
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};
