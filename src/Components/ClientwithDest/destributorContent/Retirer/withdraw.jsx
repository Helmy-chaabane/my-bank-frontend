import React, { Component } from "react";
import auth from "../../../../services/clientServices";
import CurrencyFormat from "react-currency-format";
import { Card } from "primereact/card";
import { toast } from "react-toastify";
import "./withdraw.css";

class Withdraw extends Component {
  state = {
    account: {},
  };

  async componentDidMount() {
    const Number = this.props.match.params.id;
    const { data: account } = await auth.getMyAccount(Number);
    this.setState({ account });
  }

  handleWithdraw = async (withdraw) => {
    const { account } = this.state;
    account.solde -= withdraw;
    await auth.updateMyAccount(account);
    this.props.history.push("/dest");
    toast.success("Successfully withdraw money from you balance account");
  };

  render() {
    const { account } = this.state;
    return (
      <div className="loginD">
        <div className="title_D">
          <span className="title_destri">
            <h3>WithDraw</h3>
          </span>
        </div>

        <Card
          title={account?.account_num?.toString()}
          style={{
            margin: "auto",
            width: "90%",
            marginBottom: "20px",
          }}
        >
          <p className="subtitle_acc">
            Balance:
            <CurrencyFormat
              value={account.solde}
              displayType={"text"}
              thousandSeparator={true}
              decimalSeparator="."
              allowNegative={false}
              prefix={"TND "}
            />
          </p>

          <div className="p-grid MoneyChoices ">
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(10)}
            >
              TND 10
            </div>
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(20)}
            >
              TND 20
            </div>
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(30)}
            >
              TND 30
            </div>
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(50)}
            >
              TND 50
            </div>
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(90)}
            >
              TND 90
            </div>
            <div
              className="p-col-5 choice"
              onClick={() => this.handleWithdraw(100)}
            >
              TND 100
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Withdraw;
