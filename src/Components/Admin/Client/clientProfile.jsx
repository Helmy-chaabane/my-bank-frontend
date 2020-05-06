import React, { Component } from "react";
import auth from "../../../services/adminServices";
import ProfilHeader from "./common/profilheader";
import ClientFooter from "./common/clientdisplays/clientFooter";
import ClientDisplay from "./common/clientdisplays/clientDisplay";
import AccountDisplay from "./common/accountdisplays/accountDisplay";
import AccountFooter from "./common/accountdisplays/accountFooter";
import CardDisplay from "./common/carddisplats/cardDisplay";
import CardFooter from "./common/carddisplats/cardFooter";
import SideBar from "./common/sidebar/sidebar";
import validate from "../AddClient/comon/validation/validator";
import { toast } from "react-toastify";
import { Dialog } from "primereact/dialog";
import "./profile.css";

class ClientProfile extends Component {
  constructor(props) {
    super(props);
    this.Email = React.createRef();
    this.Solde = React.createRef();
    this.Telephone = React.createRef();
    this.Street = React.createRef();
    this.City = React.createRef();
    this.Zip_Code = React.createRef();
    this.Civil_Status = React.createRef();
    this.state = {
      client: {},
      card: {},
      accounts: [],
      history: [],
      show: false,
      color: "#F39C12",
      modelShow: false,
      update: false,
      modelComponent: null,
      code: "",
    };
  }

  input = React.createRef();

  async componentDidMount() {
    const id = this.props.match.params.id;
    const { data: client } = await auth.getClient(id);
    const { data: accounts } = await auth.getAccountsforClient(id);
    const { data: history } = await auth.getHistoryForClient(id);
    const { data: card } = await auth.getCarteforClient(id);
    this.setState({ client, accounts, history, card });
  }

  getComponent = (comp) => {
    const { client, accounts, color, update, code, card } = this.state;
    switch (comp) {
      case "client":
        return (
          <ClientDisplay
            client={client}
            update={update}
            Email={this.Email}
            Telephone={this.Telephone}
            Street={this.Street}
            City={this.City}
            Zip_Code={this.Zip_Code}
            Civil_Status={this.Civil_Status}
          />
        );
      case "account":
        return (
          <AccountDisplay
            title={`You have ${accounts.length} accounts`}
            setModelShow={this.setModelShow}
            accounts={accounts}
            color={color}
            handleDeleteAccount={this.handleDeleteAccount}
            handleBlockAccount={this.handleBlockAccount}
            code={code}
            handleChangeCode={this.handleChangeCode}
          />
        );
      case "card":
        return <CardDisplay card={card} />;
      default:
        return;
    }
  };

  setChange = () => {
    const fakeClient = { ...this.state.client };
    fakeClient.email =
      this.Email.current.element.value === ""
        ? fakeClient.email
        : this.Email.current.element.value;
    fakeClient.adresse.Code_postale =
      this.Zip_Code.current.element.value === ""
        ? fakeClient.adresse.Code_postale
        : this.Zip_Code.current.element.value;
    fakeClient.adresse.Ville =
      this.City.current.element.value === ""
        ? fakeClient.adresse.Ville
        : this.City.current.element.value;
    fakeClient.adresse.Rue =
      this.Street.current.element.value === ""
        ? fakeClient.adresse.Rue
        : this.Street.current.element.value;
    fakeClient.etat_civil =
      this.Civil_Status.current.value === ""
        ? fakeClient.etat_civil
        : this.Civil_Status.current.value;
    fakeClient.telephone =
      this.Telephone.current.element.value === ""
        ? fakeClient.telephone
        : this.Telephone.current.element.value;
    const { clientErrors } = validate.errorDitector(fakeClient);
    if (clientErrors) return toast.warn("Please verify your Informations");
    if (JSON.stringify(this.state.client) === JSON.stringify(fakeClient)) {
      toast.success("You haven't change anything !");
      this.setState({ update: false });
    } else {
      this.updateClient(fakeClient);
    }
  };

  handleBlockAccount = async (acc) => {
    const fakeAccounts = [...this.state.accounts];
    const index = fakeAccounts.indexOf(acc);
    acc.blocked = !acc.blocked;
    const { data: account } = await auth.updateAccount(acc);
    fakeAccounts[index] = account;
    this.setState({ accounts: fakeAccounts });
  };

  handleChangeCode = (code) => {
    this.setState({ code });
  };
  
     handleDeleteClient = async () => {
		
		  const {data:cl}= await auth.deleteClient(this.props.match.params.id)
		  if(!cl) return toast.error("no sucha client")
		  this.props.history.push("/");
		  return toast.success("Cleint has been deleted")
		 
	  };

  handleDeleteAccount = async (id) => {
    const { data: account } = await auth.deleteAccount(id);
    const newAccounts = this.state.accounts.filter(
      (acc) => acc._id !== account._id
    );
    this.setState({
      accounts: newAccounts,
      modelComponent: null,
      modelShow: false,
    });
    toast.success("Account has been deleted from you profile");
  };

  updateClient = async (client) => {
    const { data: new_client } = await auth.updateClient(client);
    this.setState({ client: new_client, update: false });
    toast.success("Updated  Successfully !!");
  };

  saveNewAccount = async () => {
    const solde = this.Solde.current.value;
    if (solde < 0) return toast.warn("Enter postive Number please");
    const now = new Date();
    const acc = {
      account_num: now.getTime() % 100000000000,
      solde: solde,
      owner: this.state.client._id,
      stats: {
        win: {
          percent: [],
          date: [],
        },
        loose: {
          percent: [],
          date: [],
        },
        date: now.getFullYear() + "/" + (now.getMonth() + 1),
      },
    };
    const { data: account } = await auth.addAccount(acc);
    const accounts = [...this.state.accounts, account];
    this.setState({ modelShow: false, accounts });
    toast.success("Account has been added to your profil");
  };

  blockStateCard = async () => {
    const stateCard = { ...this.state.card };
    stateCard.blocked = !stateCard.blocked;
    const { data: card } = await auth.updateCarte(stateCard);
    this.setState({ card, modelShow: false });
    const state = card.blocked ? "Blocked" : "Unbloked";
    toast.success("The account has been " + state);
  };

  setUpdate = (update = !this.state.update) => {
    this.setState({ update: update });
  };
  setShowColor = () => {
    this.setState({ show: !this.state.show });
  };

  setModelShow = (boolean, modelComponent = null) => {
    this.setState({ modelShow: boolean, modelComponent });
  };

  setColor = (color) => {
    this.setState({ color: `#${color}` });
  };

  render() {
    const {
      client,
      color,
      card,
      show,
      modelShow,
      update,
      modelComponent,
    } = this.state;
    return (
      <React.Fragment>
        <div className="profile">
          <SideBar
            color={color}
            setColor={this.setColor}
            show={show}
            setShow={this.setShowColor}
          />
          <div className="addC-header">
            <span className="head pi pi-user"> Client</span>
          </div>
          <div className="profile_body">
            <ProfilHeader
              title={`${client.prenom} ${client.nom}`}
              footer={
                <ClientFooter
				  handleDeleteClient={this.handleDeleteClient}
                  setModelShow={this.setModelShow}
                  update={update}
                  setUpdate={this.setUpdate}
                  setChange={this.setChange}
                />
              }
            >
              {this.getComponent("client")}
            </ProfilHeader>
          </div>
          <div className="accounts">
            <div className="addC-header">
              <span className="head pi pi-money-bill"> Accounts</span>
            </div>
            <div className="account_body">
              <ProfilHeader
                title={``}
                footer={
                  <AccountFooter
                    setModelShow={this.setModelShow}
                    saveNewAccount={this.saveNewAccount}
                    Solde={this.Solde}
                  />
                }
              >
                {this.getComponent("account")}
              </ProfilHeader>
            </div>
          </div>

          <div className="last_part row">
            <div className="col-5">
              <div className="addC-header">
                <span className="head pi pi-id-card"> Card</span>
              </div>
              <ProfilHeader
                title={`card`}
                footer={
                  <CardFooter
                    setModelShow={this.setModelShow}
                    block={card.blocked}
                    blockStateCard={this.blockStateCard}
                  />
                }
              >
                {this.getComponent("card")}
              </ProfilHeader>
            </div>
            <div className="col">
              <div className="addC-header">
                <span className="head pi pi-id-card"> History</span>
              </div>
              <ProfilHeader title={`History`} footer={null}>
                {this.getComponent("")}
              </ProfilHeader>
            </div>
          </div>
        </div>
        <Dialog
          closable={false}
          header="Confirmation"
          visible={modelShow}
          style={{ width: "60vw" }}
          onHide={() => this.setModelShow(false)}
        >
          {modelComponent}
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ClientProfile;
