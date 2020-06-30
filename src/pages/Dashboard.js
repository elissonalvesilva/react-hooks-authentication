import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/page1">Page 1</Link>
    </div>
  );
}

export default Dashboard;