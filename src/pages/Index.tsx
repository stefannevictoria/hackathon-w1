
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to login on the initial page load
  return <Navigate to="/login" replace />;
};

export default Index;
