import React, { Component } from "react";
import MoneyCard from "./common/moneyCard";
import Arrow from "./common/arrow";
import Transfer from "./common/transfer";
import auth from "../../../services/adminServices";
import User from "../../../services/authService";
import { toast } from "react-toastify";
import { Card } from "primereact/card";
import "./virement.css";

class Virement extends Component {
  state = {
    looser: {},
    winner: {},
    looser_acc: null,
    winner_acc: null,
    account_1: "",
    account_2: "",
    transfer: false,
    exchange: 0,
  };

  handleChangeInputs = (input, name) => {
    this.setState({ [`${input.name}`]: input.value, [`${name}`]: null });
  };

  handleExchange = (exchange) => {
    this.setState({ exchange });
  };

  handleTransfer = async () => {
    const { exchange } = this.state;
    if (exchange <= 0) return toast.warn("Enter your amount !");
    const looser = { ...this.state.looser_acc };
    const winner = { ...this.state.winner_acc };
    if (looser.solde < exchange)
      return toast.error("Please put less or equal then the owner's balance");
    looser.solde -= exchange;
    winner.solde += exchange;
    const { data: loose } = await auth.updateAccount(looser);
    const { data: win } = await auth.updateAccount(winner);
    this.setState({
      transfer: true,
      looser_acc: loose,
      winner_acc: win,
      exchange: 0,
    });
    toast.success("Successfully transfered the money");
  };

  getUser = async (account_input, account_name, account_owner) => {
    const { account_1, account_2, looser_acc, winner_acc } = this.state;
    if (
      account_1.length !== 0 &&
      account_1 === account_2 &&
      (looser_acc || winner_acc)
    )
      return toast.error("Cant transfer to the same account !!");
    const Number = this.state[account_input];
    const { data: account } = await auth.getAccountforClient(Number);
    if (!account) return toast.error("Account doesn't exist");
    if (
      User.getCurrentUser().role === "Client" &&
      account_name === "looser_acc"
    ) {
      const user = User.getCurrentUser();
      if (account.owner !== user._id)
        return toast.error("you dont own this account");
      this.setState({
        [`${account_name}`]: account,
        [`${account_owner}`]: user,
      });
      return;
    }
    const { data: user } = await auth.getClient(account.owner);
    this.setState({ [`${account_name}`]: account, [`${account_owner}`]: user });
  };

  render() {
    const {
      account_1,
      account_2,
      looser,
      winner,
      winner_acc,
      looser_acc,
      transfer,
      exchange,
    } = this.state;
    return (
      <div className="virements">
        <div className="addC-header">
          <span className="head pi pi-sort-alt"> Transfers</span>
        </div>
        <Card title="Exchange between accounts">
          <div className="row m-4">
            <div className="col-5 looser">
              <MoneyCard
                name="looser_acc"
                owner="looser"
                title="From"
                user={looser}
                value={account_1}
                handleChangeInputs={this.handleChangeInputs}
                account={looser_acc}
                input="account_1"
                getUser={this.getUser}
              />
            </div>
            <div className="col-2 arrow">
              <Arrow />
            </div>
            <div className="col-5 winner">
              <MoneyCard
                name="winner_acc"
                owner="winner"
                title="To"
                input="account_2"
                user={winner}
                value={account_2}
                handleChangeInputs={this.handleChangeInputs}
                account={winner_acc}
                getUser={this.getUser}
              />
            </div>
          </div>
          {looser_acc && !looser_acc.blocked && winner_acc && (
            <Transfer
              transfer={transfer}
              exchange={exchange}
              handleExchange={this.handleExchange}
              handleTransfer={this.handleTransfer}
            />
          )}
        </Card>
      </div>
    );
  }
}

export default Virement;
