import React from "react";

function Section2(props) {
  return (
    <div className="card">
      <a href="#">{props.user}</a>
      <h1>{props.number}</h1>
      <h3>{props.follower}</h3>
      <p>{props.rating}</p>
    </div>
  );
}

export default Section2;
