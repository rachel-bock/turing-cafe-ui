import React from 'react';
import './Card.css';

const Card = ({reservation}) => {
  return (
    <div className="reservation-card">
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>Number of Guests: {reservation.number}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;