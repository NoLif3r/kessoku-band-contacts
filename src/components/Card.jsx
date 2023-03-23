import React from "react";
import Avatar from "./Avatar";
import TextDetails from "./TextDetails";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <TextDetails text={props.tel} />
        <TextDetails text={props.email} />
        <a href={props.profile} target="_blank" rel="noreferrer"><TextDetails text="Profile Link" /></a>
      </div>
    </div>
  );
}

export default Card;
