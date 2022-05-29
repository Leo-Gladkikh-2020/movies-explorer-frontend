import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, ...props }) {
  const token = localStorage.getItem('token');

  return (
    <Route>
      {
        () => token ? <Component {...props} /> : <Redirect to="/signin" />
      }
    </Route>
  );
}