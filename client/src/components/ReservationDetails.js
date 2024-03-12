import React from 'react';

function ReservationDetails({ details, onCancel }) {
  if (!details) {
    // this would show reservations when a user wants to check its reservations
    //but midway there realized i dunno how to make that, so stopped trying
    return <div>No reservation details available.</div>;
  }

  //this one, however, will show the reservation on the reservation menu
  return (
    <div>
      <h2>Reservation Details</h2>
      <p>Name: {details.passengerName}</p>
      <p>Email: {details.passengerEmail}</p>
      <p>Flight ID: {details.flightId}</p>
      <button onClick={onCancel}>Cancel Reservation</button>
    </div>
  );
}

export default ReservationDetails;