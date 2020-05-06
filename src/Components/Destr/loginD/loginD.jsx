import React, { Component } from "react";
import auth from "../../../services/authService";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { toast } from "react-toastify";
import "./loginD.css";

class LoginDestrib extends Component {
  state = {
    Num_Carte: "",
    passCode: "",
  };

  handleChange = (name, value) => {
    this.setState({ [`${name}`]: value });
  };

  errorsDetect = () => {
    const { passCode, Num_Carte } = this.state;

    if (Num_Carte.length < 13)
      return { message: "Card Number must have 13 digits" };
    else if (passCode.length < 8)
      return { message: "Card password must have 8 digits" };
  };

  handleform = async (e) => {
    e.preventDefault();
    const error = this.errorsDetect();
    if (error) return toast.error(error.message);
    try {
      await auth.Dest(
        this.state.Num_Carte.replace(/-/g, ""),
        this.state.passCode
      );
      const user = auth.getCurrentUser();
      this.props.history.replace("/dest");
      toast.success(
        "welcome home " + (user.sexe === "Homme" ? "Mr." : "Mme.") + user.prenom
      );
    } catch (e) {}
  };
  render() {
    const { Num_Carte, passCode } = this.state;
    return (
      <div className="loginD">
        <div className="title_D">
          <span className="title_destri ">Welcome to our Distributor</span>
        </div>
        <div>
          <div className="form_Dest">
            <form onSubmit={this.handleform}>
              <InputMask
                placeholder=" Enter your Card Number"
                mask="9-999-999-999-999"
                value={Num_Carte}
                onChange={(e) => this.handleChange("Num_Carte", e.value)}
              />

              <InputText
                maxLength={8}
                placeholder=" Your card password"
                type="password"
                keyfilter="pnum"
                value={passCode}
                onChange={(e) => this.handleChange("passCode", e.target.value)}
              />
              <Button
                label="Log In"
                className="p-button-rounded p-button-primary btn-block font-weight-bold"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginDestrib;
