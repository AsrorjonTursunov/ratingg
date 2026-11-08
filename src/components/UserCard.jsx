import React from "react";

function UserCard(props) {
  return (
    <div className="card">
      <h2>Name : {props.name}</h2>
      <h2>LastName : {props.lastname}</h2>
      <h3>Age : {props.age}</h3>
      <h3>Job : {props.job}</h3>
      <button>Koproq Malumot Uchun</button>
    </div>
  );
}
export default UserCard;
