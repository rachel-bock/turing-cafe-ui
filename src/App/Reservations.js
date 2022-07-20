import React from 'react';
import Card from './Card';

const Reservations = ({res, deleteRes}) => {
  const listing = res.map(reservation => {
    return (
      <Card reservation={reservation} deleteRes={deleteRes} key={reservation.id}/>
    )
  })

  return (
    <>
      {listing}
    </>
  )

}

export default Reservations;