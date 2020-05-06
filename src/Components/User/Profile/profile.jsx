import React, { Component } from "react";
import ClientDisplay from "./../../Admin/Client/common/clientdisplays/clientDisplay";
import auth from "../../../services/clientServices";
import AccountsWithCharts from "./common/accountsCharts/accountsWithCharts";
import "./myprofile.css";

class MyProfile extends Component {
  state = {
    profile: {},
    code: "",
    myAccounts: [],
  };

  async componentDidMount() {
    const { data: profile } = await auth.myProfil();
    const { data: myAccounts } = await auth.getMyAccounts();
    this.setState({ profile, myAccounts });
  }
  handleChangeCode = (code) => {
    this.setState({ code });
  };
  render() {
    const { profile, myAccounts, code } = this.state;

    return (
      <React.Fragment>
        <div className="myprofile">
          <div className="addC-header">
            <span className="head pi pi-user"> My Profile</span>
          </div>

          <ClientDisplay client={profile} />
        </div>

        <div className="accounts">
          <div>
            <AccountsWithCharts
              color="gold"
              title={`You have ${myAccounts.length} accounts`}
              accounts={myAccounts}
              handleChangeCode={this.handleChangeCode}
              code={code}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyProfile;
