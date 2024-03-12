import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

//apparently i gotta use axios here on the index.js, otherwise
//the routing doesn't work
//i have no idea why, but will learn
axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

