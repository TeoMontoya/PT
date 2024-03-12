import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import FlightList from './components/FlightList';
import ReservationForm from './components/ReservationForm';
import ReservationDetails from './components/ReservationDetails';
import ReservationsList from './components/ReservationsList';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('search');
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [reservationDetails, setReservationDetails] = useState(null);

  useEffect(() => {
    fetchFlights();
  }, []);

  //THis one makes it so the fetched flights from the seed are displayed at homepage
  const fetchFlights = async () => {
    try {
      const response = await axios.get('/api/flights');
      setFlights(response.data);
      setCurrentView('flights'); //specifically this line here
    } catch (error) {
      console.error('Failed to fetch flights:', error);
    }
  };

  //this reuses the code above for when someone wants to go back to flights
  const handleSearch = async () => {
    await fetchFlights(); 
  };

  const handleFlightSelect = (flight) => {
    setSelectedFlight(flight);
    setCurrentView('reserve');
  };

  const handleReservationSubmit = (reservation) => {
    setReservationDetails(reservation);
    setCurrentView('details');
  };

  const handleCancelReservation = async () => {
    if (reservationDetails && reservationDetails._id) {
      try {
        await axios.delete(`/api/reservations/${reservationDetails._id}`);
        console.log('Reservation cancelled successfully');
        setReservationDetails(null);
        setCurrentView('search'); 
      } catch (error) {
        console.error('Failed to cancel reservation:', error);
      }
    }
  };

  //this is relatively easy, it controls the navigation.
  //I know it's not pretty, but really dunno how to improve it yet, still learning
  return (
    <div>
      <div className="navigation">
        <button onClick={handleSearch} className="nav-button">Search Flights</button>
        <button onClick={() => setCurrentView('myReservations')} className="nav-button">My Reservations</button>
      </div>
      {currentView === 'search' && <SearchForm onSearch={handleSearch} />}
      {currentView === 'flights' && <FlightList flights={flights} onSelectFlight={handleFlightSelect} />}
      {currentView === 'reserve' && <ReservationForm flight={selectedFlight} onSubmit={handleReservationSubmit} />}
      {currentView === 'details' && <ReservationDetails details={reservationDetails} onCancel={handleCancelReservation} />}
      {currentView === 'myReservations' && <ReservationsList onCancelReservation={handleCancelReservation} />}
    </div>
  );
}

export default App;