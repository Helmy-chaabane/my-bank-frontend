import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../../services/authService";

const getpath = () => {
  const user = auth.getCurrentUser();
  if (!user) return "/login";
  const devise = auth.getDevise();
  if (devise && devise === "dest") return "/dest";
  switch (user.role) {
    case "Admin":
      return "/admin";
    case "Client":
      return "/MyProfile";
    default:
      return;
  }
};
const RedirectHome = ({ path, component: Component, render, ...rest }) => {
  return <Redirect to={getpath()} />;
};

export default RedirectHome;
