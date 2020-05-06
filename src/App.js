import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Components/Login/login";
import ProtectedRoute from "./Components/Routers/protectedRoute";
import AdminTemplate from "./Components/Admin/adminTemplate";
import RedirectHome from "./Components/Routers/redirectHome";
import UserTemplate from "./Components/User/userTemplate";
import ClisentDest from "./Components/ClientwithDest/clientDest";
import LoginDestrib from "./Components/Destr/loginD/loginD";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  return (
    <main>
      <ToastContainer autoClose={1500} draggable />
      <Switch>
        <Route path="/distributeur" component={LoginDestrib} />
        <Route path="/login" component={LoginForm} />
        <ProtectedRoute path="/dest" component={ClisentDest} />
        <ProtectedRoute path="/admin" component={AdminTemplate} />
        <ProtectedRoute path="/myProfile" component={UserTemplate} />
        <RedirectHome />
      </Switch>
    </main>
  );
};

export default App;
