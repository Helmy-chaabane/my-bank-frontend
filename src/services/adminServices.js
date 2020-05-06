import http from "./httpService";

//Clients
function getClients() {
  return http.get("/clients");
}

function getClient(id) {
  return http.get("/clients/" + id);
}

function addClient(client) {
  return http.post("/clients", client);
}

function updateClient(client) {
  const body = { ...client };
  delete body._id;
  return http.patch("/clients/" + client._id, body);
}

function deleteClient(id) {
  return http.delete("/clients/" + id);
}

//Accounts
function getAccountsforClient(id) {
  //id client
  return http.get("/accounts/" + id);
}

function getAccountforClient(Number) {
  //id  Account
  return http.get("/account/" + Number);
}

function addAccount(account) {
  return http.post("/accounts", account);
}

function deleteAccount(id) {
  //account id
  return http.delete("/accounts/" + id);
}

function updateAccount(account) {
  const body = { ...account };
  delete body._id;
  return http.patch("/accounts/" + account._id, body);
}

//card

function getCarteforClient(id) {
  //client id
  return http.get("/carte/" + id);
}

function addCarte(carte) {
  return http.post("/carte/", carte);
}

function deleteCarte(id) {
  //id carte
  return http.delete("/carte/" + id);
}

function updateCarte(carte) {
  const body = { ...carte };
  delete body._id;
  return http.patch("/carte/" + carte._id, body);
}

//history

function getHistoryForClient(id) {
  return http.get("/History/" + id);
}

export default {
  getClients,
  getClient,
  addClient,
  updateClient,
  deleteClient,
  getAccountsforClient,
  getAccountforClient,
  addAccount,
  deleteAccount,
  updateAccount,
  getCarteforClient,
  addCarte,
  deleteCarte,
  updateCarte,
  getHistoryForClient,
};
