import React from 'react';

import AppRoutes from './routes';
import AuthRoutes from './authRoute';

import useAuth from '../hooks/useAuth';

function Routes() {
  const { signed, loading } = useAuth();
  
  if (loading) {
    console.log('loading');
  }

  return signed ? <AppRoutes/> : <AuthRoutes/>;
}

export default Routes;