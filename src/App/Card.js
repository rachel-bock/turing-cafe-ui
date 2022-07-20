import React from 'react';
import './Card.css';

const Card = ({reservation, deleteRes}) => {
  return (
    <div className="reservation-card" id={reservation.id}>
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>{reservation.time}</p>
      <p>Number of Guests: {reservation.number}</p>
      <button onClick={event => deleteRes(event)}>Cancel</button>
    </div>
  )
}

export default Card;