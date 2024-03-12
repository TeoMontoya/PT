import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm({ flight, onSubmit }) {
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // This one will construct the reservation object with its relevant id and info
    //at least that is what is expected, it is not showing the name and email and dunno why
    const reservationDetails = {
      flightId: flight._id,
      name: passengerName, 
      email: passengerEmail, 
    };

    try {
      // this makes a POST request to the server to create a new reservation in 
      const response = await axios.post('/api/reservations', reservationDetails);
      onSubmit(response.data); // 
    } catch (error) {
      console.error('Failed to make a reservation:', error);
    }
  };

  //this is the actual form, after it is submitted is that the server will receive the info
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Reserve Flight</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={passengerName}
          onChange={(e) => setPassengerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={passengerEmail}
          onChange={(e) => setPassengerEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;