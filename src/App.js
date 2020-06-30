import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
