import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src={`https://robohash.org/${props.cat.id}?set=set4`}
        alt="Cat profile pic"
      />
      <h2>{props.cat.name}</h2>
      <p>{props.cat.email}</p>
    </div>
  );
};
