import React from "react";
import { Switch } from "react-router-dom";
import ConsulterClients from "./ConsulteClient/consulterClients";
import ClientProfile from "./Client/clientProfile";
import Virement from "./Virements/virement";
import ProtectedRoute from "../Routers/protectedRoute";
import AddClient from "./AddClient/addClient";
import MenuBar from "../MenuBar/menuBar";
import Home from "./Home/home";
import RedirectHome from "./../Routers/redirectHome";
import auth from "../../services/authService";
import { toast } from "react-toastify";

const AdminTemplate = (props) => {
  const links = [
    { name: "Home", url: "/admin" },
    { name: "Add Client", url: "/admin/addClient" },
    { name: "Transfer", url: "/admin/virements" },
  ];
  const logout = () => {
    toast.success("See you soon");
    auth.logout();
    props.history.replace("/login");
  };
  return (
    <React.Fragment>
      <MenuBar logout={logout} links={links} />
      <div className="App">
        <Switch>
          <ProtectedRoute path="/admin/virements" component={Virement} />
          <ProtectedRoute path="/admin/addClient" component={AddClient} />
          <ProtectedRoute
            path="/admin/ClientProfile/:id"
            component={ClientProfile}
          />
          <ProtectedRoute
            path="/admin/consultClients"
            component={ConsulterClients}
          />
          <ProtectedRoute exact path="/admin" component={Home} />
          <RedirectHome />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default AdminTemplate;
