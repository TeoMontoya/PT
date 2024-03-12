import React from 'react';

//this one is pretty straightforward, you click the thing, the reservation is deleted
function CancelReservation({ onCancel }) {
  return (
    <div>
      <button onClick={onCancel}>Cancel Reservation</button>
    </div>
  );
}

export default CancelReservation;
