import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  if (!auth.getCurrentUser()) return <Redirect to="/login" />;
  return (
    <Route
      {...rest}
      render={(props) => {
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
