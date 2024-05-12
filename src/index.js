import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global styles here
import App from './App'; // Assuming your main App component is located in App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
