import React from "react";

export default function Course(props) {
  return (
    <div className="flex">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
