import React, { Component } from "react";
import admin from "../../../services/adminServices";
import Step from "./comon/Step";
import Swiper from "./comon/swiper";
import Client from "./comon/client/client";
import Account from "./comon/account/account";
import Validation from "./comon/validation/validation";
import Card from "./comon/card/card";
import Model from "./comon/model/model";
import { toast } from "react-toastify";
import "./addClient.css";

class AddClient extends Component {
  state = {
    client: {
      cin: "",
      nom: "",
      prenom: "",
      sexe: "",
      etat_civil: "",
      adresse: { Rue: "", Ville: "", Code_postale: "" },
      email: "",
      telephone: "",
      naissance: "",
      password: "",
    },
    account: {
      account_num: new Date().getTime() % 100000000000,
      solde: 100,
      owner: "",
    },
    card: {
      Num_Carte: new Date().getTime(),
      owner: "",
      passCode: "",
    },
    showpassword: false,
    showpasscode: false,
    currentIndex: 0,
    clientErrors: {},
    accountErrors: {},
    cardErrors: {},
    modelShow: false,
    titles: [
      { label: "New Client" },
      { label: "New Account" },
      { label: "New Card" },
      { label: "Confirmation" },
    ],
  };

  handleErrors = (clientErrors, accountErrors, cardErrors, currentIndex) => {
    this.setState({ clientErrors, accountErrors, cardErrors, currentIndex });
  };

  chosenComponent = () => {
    const {
      currentIndex,
      client,
      account,
      card,
      clientErrors,
      accountErrors,
      cardErrors,
    } = this.state;
    switch (currentIndex) {
      case 0:
        return (
          <div className="fadeClient">
            <Client
			 
              client={client}
              handleChangeClient={this.handleChangeClient}
              errors={clientErrors}
            />
          </div>
        );
      case 1:
        return (
          <div className="fadeAccount">
            <Account
              solde={account.solde}
              handleChangeAccount={this.handleChangeAccount}
              errors={accountErrors}
            />
          </div>
        );
      case 2:
        return (
          <div className="fadeCard">
            <Card
              errors={cardErrors}
              handleChangeCard={this.handleChangeCard}
              card={card}
              email={client.email}
              name={
                client.prenom !== "" && client.nom !== ""
                  ? client.prenom + " " + client.nom
                  : ""
              }
            />
          </div>
        );
      case 3:
        return (
          <div className="fadeValidate">
            <Validation
              HandleModel={this.HandleModel}
              client={client}
              account={account}
              card={card}
              handleErrors={this.handleErrors}
            />
          </div>
        );
      default:
        return <Client />;
    }
  };

  changeIndex = (currentIndex) => {
    this.setState({ currentIndex });
  };

	 

  handleChangeClient = (property, value) => {
    const adresse = ["Rue", "Ville", "Code_postale"];
    const { client } = this.state;
    if (adresse.includes(property)) client.adresse[property] = value;
    else client[property] = value;
    this.setState({ client });
  };
  handleChangeAccount = (solde) => {
    const { account } = this.state;
    account.solde = solde;
    this.setState({ account });
  };

  handleChangeCard = (passCode) => {
    const { card } = this.state;
    card.passCode = passCode;
    this.setState({ card });
  };

  validationCompleted = ({ client, account, card } = this.state) => {
    return client && account && card;
  };

  HandleModel = (action) => {
    if (action === "Show") this.setState({ modelShow: true });
    else
      this.setState({
        modelShow: false,
        showpassword: false,
        showpasscode: false,
      });
  };
  
  

  HandlePass = (pass) => {
    if (pass === "password")
      this.setState({ showpassword: !this.state.showpassword });
    else this.setState({ showpasscode: !this.state.showpasscode });
  };

	

  handleSaveClient = async () => {
    const { client, account, card } = this.state;
    console.log(client);
    const { data: savedClient } = await admin.addClient(client);
    account.owner = savedClient._id;
    card.owner = savedClient._id;
    account.account_num = account.account_num.toString();
    account.stats = {
      win: {
        percent: [],
        date: [],
      },
      loose: {
        percent: [],
        date: [],
      },
      month: new Date().getFullYear() + "/"+(new Date().getMonth() + 1),
    };
    const { data: savedAccount } = await admin.addAccount(account);
    if (!savedAccount) return toast.warn("unexpected error occured");
    const { data: savedCard } = await admin.addCarte(card);
    if (!savedCard) return toast.warn("unexpected error occured");
    toast.success("Client added successfully !");
    this.props.history.push("/admin");
  };

  render() {
    const {
      currentIndex,
      titles,
      modelShow,
      client,
      account,
      card,
      showpassword,
      showpasscode,
    } = this.state;
    return (
      <div>
        <Step titles={titles} index={currentIndex} />
        <Swiper
          changeIndex={this.changeIndex}
          header={titles[currentIndex].label}
          currentIndex={currentIndex}
          listLength={titles.length}
        >
          <div className="container_C">
            <div className="addC-container">{this.chosenComponent()}</div>
          </div>
        </Swiper>
        <Model
          handleSaveClient={this.handleSaveClient}
          HandlePass={this.HandlePass}
          showpassword={showpassword}
          showpasscode={showpasscode}
          modelShow={modelShow}
          HandleModel={this.HandleModel}
          client={client}
          account={account}
          card={card}
        />
      </div>
    );
  }
}

export default AddClient;
