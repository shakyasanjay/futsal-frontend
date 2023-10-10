import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <button className="card-button">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
