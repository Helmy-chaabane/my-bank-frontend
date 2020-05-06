import React, { Component } from "react";
import auth from "../../../services/clientServices";
import SoldeChart from "../../User/Profile/common/accountsCharts/soldeChart";
import { toast } from "react-toastify";

class ProfileDest extends Component {
  state = {
    accounts: [],
  };

  async componentDidMount() {
    const { data: accounts } = await auth.getMyAccounts();
    this.setState({ accounts });
  }

  goToWithdrawPage = (account) => {
    account.blocked
      ? toast.error("You can withdraw your balance with an Blocked account")
      : this.props.history.push("/dest/withdraw/" + account.account_num);
  };

  render() {
    const { accounts } = this.state;
    return (
      <div className="loginD">
        <div className="title_D">
          <span className="title_destri ">
            <h3>Pick a account </h3>
          </span>
        </div>
        <div></div>
        <div className="p-grid p-align-center">
          {accounts.map((account) => {
            return (
              <div
                className="p-col-4"
                key={account._id}
                onClick={() => this.goToWithdrawPage(account)}
                style={{ cursor: "pointer" }}
              >
                <SoldeChart account={account} color="#F5B041" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProfileDest;
