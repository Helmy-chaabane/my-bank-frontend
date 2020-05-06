import React, { Component } from "react";
import auth from "../../../services/adminServices";
import Table from "./common/table";
import Search from "./common/search";
import Pagination from "./common/pagination";
import "./consult.css";

class ConsulterClients extends Component {
  state = {
    clients: [],
    selectedSearch: "cin",
    searchby: "",
    currentIndex: 0,
    NumberOfRows: 8,
  };

  async componentDidMount() {
    const { data: clients } = await auth.getClients();
    this.setState({ clients });
  }

  handleInput = (searchby) => {
    this.setState({ searchby, currentIndex: 0 });
  };

  handleDropDown = (selectedSearch) => {
    this.setState({ selectedSearch, searchby: "" });
  };

  wantedClients = () => {
    const { clients, searchby, selectedSearch } = this.state;
    const wanted = clients.filter((client) => {
      return selectedSearch !== "adresse"
        ? client[selectedSearch]
            .toLowerCase()
            .startsWith(searchby.toLowerCase())
        : client[selectedSearch].Ville.toLowerCase().startsWith(
            searchby.toLowerCase()
          );
    });
    return wanted;
  };

  pages = (clients, Rows) => {
    const Numberpages = Math.ceil(clients.length / Rows);
    const pages = [...Array(Numberpages).keys()].map((i) => {
      return { label: `${i + 1}`, value: i };
    });
    return pages;
  };
  handleIndex = (currentIndex) => {
    this.setState({ currentIndex });
  };

  render() {
    const { searchby, selectedSearch, currentIndex, NumberOfRows } = this.state;
    const wanted = this.wantedClients();
    const pages = this.pages(wanted, NumberOfRows);
    const wantedClients = wanted.slice(
      currentIndex * NumberOfRows,
      currentIndex * NumberOfRows + NumberOfRows
    );

    return (
      <React.Fragment>
        <Search
          searchby={searchby}
          handleInput={this.handleInput}
          handleDropDown={this.handleDropDown}
          selectedSearch={selectedSearch}
        />
        <Table clients={wantedClients} history={this.props.history} />
        <Pagination
          pages={pages}
          currentIndex={currentIndex}
          handleIndex={this.handleIndex}
        />
      </React.Fragment>
    );
  }
}

export default ConsulterClients;
