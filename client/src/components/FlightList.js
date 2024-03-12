import React from 'react';

//this one shows the info of the flight on the mainpage.
//it brings the info seeded by db/seed.js
function FlightList({ flights, onSelectFlight }) {
  return (
    <div className="FlightList">
      {flights.map((flight) => (
        <div key={flight._id} onClick={() => onSelectFlight(flight)} className="flight-item">
          <h3>From: {flight.from} To: {flight.to}</h3>
          <p>Departure: {new Date(flight.departure).toLocaleString()}</p>
          <p>Price: ${flight.price}</p>
        </div>
      ))}
    </div>
  );
}

export default FlightList;