import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "./../Routers/protectedRoute";
import RedirectHome from "./../Routers/redirectHome";
import ProfileDest from "./destributorContent/profileDest";
import MenuBar from "./../MenuBar/menuBar";
import auth from "../../services/authService";
import Withdraw from "./destributorContent/Retirer/withdraw";
import { toast } from "react-toastify";

const ClisentDest = (props) => {
  const links = [{ name: "My Accounts", url: "/dest" }];
  const logout = () => {
    toast.success("See you soon");
    auth.logout();
    props.history.replace("/distributeur");
  };
  return (
    <React.Fragment>
      <MenuBar logout={logout} links={links} />
      <Switch>
        <ProtectedRoute exact path="/dest/withdraw/:id" component={Withdraw} />
        <ProtectedRoute exact path="/dest" component={ProfileDest} />
        <RedirectHome />
      </Switch>
    </React.Fragment>
  );
};

export default ClisentDest;
