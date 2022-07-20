import React from 'react';
import Card from './Card';

const Reservations = ({res}) => {
  const listing = res.map(reservation => {
    return (
      <Card />
    )
  })

  return (
    <>
      {listing}
    </>
  )

}

export default Reservations;