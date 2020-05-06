import React, { Component } from "react";
import auth from "../../services/authService";
import InputLoging from "./commens/inputLogin";
import LeftSide from "./commens/leftside";
import { Button } from "primereact/button";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.css";

class LoginForm extends Component {
  state = {
    user: { cin: "", password: "" },
  };

  getmessage = (name) => {
    if (name === "cin") return name.toUpperCase() + " must have 8 digits";
    else return name.toUpperCase() + "  have at least 12 letters";
  };

  handleChange = ({ currentTarget: input }) => {
    if (input.name === "cin" && input.value.length > 8)
      return toast.error(this.getmessage("cin"));
    const { user } = this.state;
    user[input.name] = input.value;
    this.setState({ user });
  };

  validate = ({ cin, password } = this.state.user) => {
    const error = {};
    if (cin.length !== 8) {
      error.cin = this.getmessage("cin");
      return error;
    } else if (password.length < 12) {
      error.password = this.getmessage("password");
      return error;
    }
    return;
  };

  handleForm = (e) => {
    e.preventDefault();
    const error = this.validate();
    if (error) return toast.error(error["cin"] || error["password"]);
    this.handleSubmit();
  };

  handleSubmit = async ({ user: cl } = this.state) => {
    try {
      await auth.login(cl.cin, cl.password);
      const user = auth.getCurrentUser();
      user.role === "Admin"
        ? this.props.history.replace("/admin")
        : this.props.history.replace("/myProfile");
      toast.success(
        "welcome home " + (user.sexe === "Homme" ? "Mr." : "Mme.") + user.prenom
      );
    } catch (e) {}
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/admin" />;
    return (
      <div className="row logos">
        <div className="col-6 split left">
          <LeftSide />
        </div>
        <div className=" col-6 split right">
          <div className="title_log">
            <span className="login_title">Login</span>
          </div>

          <div className="form_D">
            <form onSubmit={this.handleForm}>
              <InputLoging
                length={8}
                name="cin"
                placeholder="CIN"
                handleChange={this.handleChange}
              />
              <InputLoging
                name="password"
                placeholder="Password"
                handleChange={this.handleChange}
              />
              <Button
                label="LOG IN"
                className="p-button-raised btn-block font-weight-bold"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
