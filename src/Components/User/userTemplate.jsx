import React from "react";
import { Switch } from "react-router-dom";
import ProtectedRoute from "../Routers/protectedRoute";
import MyProfile from "./Profile/profile";
import RedirectHome from "./../Routers/redirectHome";
import MenuBar from "../MenuBar/menuBar";
import Virement from "./../Admin/Virements/virement";
import CardInfo from "./cardManagement/cardInfo";
import auth from "../../services/authService";
import { toast } from "react-toastify";

const UserTemplate = (props) => {
  const links = [
    { name: "Home", url: "/myProfile" },
    { name: "Transfer", url: "/myProfile/clientTransfer" },
    { name: "Card", url: "/myProfile/cardInfo" },
  ];

  const logout = () => {
    auth.logout();
    props.history.replace("/login");
    toast.success("See you soon !");
  };
  return (
    <React.Fragment>
      <MenuBar logout={logout} links={links} />
      <div className="App">
        <Switch>
          <ProtectedRoute path="/myProfile/cardInfo" component={CardInfo} />
          <ProtectedRoute
            path="/myProfile/clientTransfer"
            render={(props) => {
              return <Virement {...props} />;
            }}
          />
          <ProtectedRoute exact path="/myProfile" component={MyProfile} />
          <RedirectHome />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default UserTemplate;
