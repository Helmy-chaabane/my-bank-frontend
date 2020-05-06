import http from "./httpService";

//profile
function myProfil() {
  return http.get("/profil");
}

//Accounts
function getMyAccounts() {
  return http.get("/accounts");
}

function getMyAccount(number) {
  return http.get("/account/" + number);
}

function getMyCarte() {
  return http.get("/carte");
}

function updateMyAccount(account) {
  const body = { ...account };
  delete body._id;
  return http.patch("/accounts/" + account._id, body);
}

function updateMyCard(card) {
  const body = { ...card };
  delete body._id;
  return http.patch("/carte/" + card._id, body);
}

export default {
  myProfil,
  getMyAccounts,
  getMyAccount,
  getMyCarte,
  updateMyAccount,
  updateMyCard,
};
