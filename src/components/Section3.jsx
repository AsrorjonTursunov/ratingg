import React from "react";
function Section3(props) {
  return (
    <div className="overview-card">
      <div className="overview-top">
        <p>{props.title}</p>
        <span className={props.platform}>{props.icon}</span>
      </div>

      <div className="overview-bottom">
        <h1>{props.number}</h1>
        <p className={props.color}>{props.rating}</p>
      </div>
    </div>
  );
}

export default Section3;
