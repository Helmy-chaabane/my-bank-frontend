const validator = require("validator");
//const emailVerf = require("../../../../services/emailServices");
const errorDitector = (client, account, card) => {
  var clientErrors = {};
  var accountErrors = {};
  var cardErrors = {};
  if (client.cin.length < 8) clientErrors.cin = "Cin is less then 8 digits";
  if (validator.isEmpty(client.nom)) clientErrors.nom = "Name field is empty";
  if (validator.isEmpty(client.prenom))
    clientErrors.prenom = "Surname field is empty";
  if (validator.isEmpty(client.sexe)) clientErrors.sexe = "sexe field is empty";
  if (validator.isEmpty(client.etat_civil))
    clientErrors.etat_civil = "etat_civil field is empty";
  if (validator.isEmpty(client.adresse.Rue))
    clientErrors.Rue = "Rue field is empty";
  if (validator.isEmpty(client.adresse.Ville))
    clientErrors.Ville = "Ville field is empty";
  if (client.adresse.Code_postale.toString().length < 4)
    clientErrors.Code_postale = "Code_postale is less then 4 digits";
  if (!validator.isEmail(client.email)) clientErrors.email = "invalid email";

  if (client.telephone.length !== 8)
    clientErrors.telephone = "telephone must have 8 digits ";
  if (validator.isEmpty(client.naissance.toString()))
    clientErrors.naissance = "naissance field is empty";

  if (client.password && client.password.length < 12)
    clientErrors.password = "password have atleast 12 letters";

  if (account && account.solde < 100)
    accountErrors.solde = "Balance is less then 100 DT";
  if (card && card.passCode.length < 8)
    cardErrors.passCode = "Code password is less the 8 digits";
  clientErrors =
    Object.keys(clientErrors).length === 0 ? undefined : clientErrors;
  accountErrors =
    Object.keys(accountErrors).length === 0 ? undefined : accountErrors;
  cardErrors = Object.keys(cardErrors).length === 0 ? undefined : cardErrors;
  return { clientErrors, accountErrors, cardErrors };
};
export default {
  errorDitector,
};
