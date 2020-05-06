import React from "react";
import InputT from "./inputT";
import InputD from "./inputD";
import InputPass from "./inputPass";
import Calender from "./calender";

const Container = ({ name, length, ...rest }) => {
  const getIcon = () => {
    switch (name) {
      case "cin":
        return "id-card";
      case "nom":
      case "prenom":
        return "user";
      case "sexe":
      case "etat_civil":
        return "users";
      case "naissance":
        return "calendar";
      case "Rue":
      case "Ville":
      case "Code_postale":
        return "home";
      case "email":
        return "envelope";
      case "telephone":
        return "tablet";
      case "password":
        return "key";
      default:
        return;
    }
  };
  const chosenInput = () => {
    switch (name) {
      case "cin":
      case "Code_postale":
      case "telephone":
        return (
          <InputT
            length={name === "Code_postale" ? 5 : 8}
            errors={rest.errors}
            handleChangeClient={rest.handleChangeClient}
            value={
              name === "Code_postale" ? rest.adresse.Code_postale : rest[name]
            }
            name={name}
            keyF={"int"}
            tooltip={(name === "Code_postale" ? "4" : "8") + " digit please"}
          />
        );
      case "nom":
      case "prenom":
      case "Ville":
      case "Rue":
        return (
          <InputT
            errors={rest.errors}
            handleChangeClient={rest.handleChangeClient}
            value={
              name === "Ville" || name === "Rue"
                ? rest.adresse[name]
                : rest[name]
            }
            name={name}
            keyF={/^[^<>*!%&{}<>@]+$/}
            tooltip={"Entrez votre " + name}
          />
        );
      case "email":
        return (
          <InputT
            errors={rest.errors}
            handleChangeClient={rest.handleChangeClient}
            name={name}
            keyF={"email"}
            tooltip={"entez votre email"}
            value={rest[name]}
          />
        );
      case "password":
        return (
          <InputPass
            error={rest.errors.password}
            length={12}
            name={name}
            value={rest[name]}
            handleChangeClient={rest.handleChangeClient}
          />
        );
      case "sexe":
        return (
          <InputD
            error={rest.errors.sexe}
            handleChangeClient={rest.handleChangeClient}
            items={["Homme", "Femme", "Autre"]}
            name={name}
            value={rest[name]}
          />
        );
      case "etat_civil":
        return (
          <InputD
            error={rest.errors.etat_civil}
            handleChangeClient={rest.handleChangeClient}
            items={["Célibataire", "Marié"]}
            name={name}
            value={rest[name]}
          />
        );
      case "naissance":
        return (
          <Calender
            error={rest.errors.naissance}
            value={rest[name]}
            name={name}
            handleChangeClient={rest.handleChangeClient}
          />
        );

      default:
        return (
          <InputT
            name={name}
            value={rest[name]}
            handleChangeClient={rest.handleChangeClient}
          />
        );
    }
  };

  const getWidth = () => {
    if (name === "naissance") return "p-col-12 ";
    else {
      return length > 3 ? "p-col-12 p-md-3" : "p-col-12 p-md-4";
    }
  };

  return (
    <div className={getWidth()}>
      <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className={"pi pi-" + getIcon()}></i>
        </span>
        {chosenInput()}
      </div>
    </div>
  );
};

export default Container;
