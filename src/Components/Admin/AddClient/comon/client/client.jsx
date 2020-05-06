import React from "react";
import Containers from "./containers";

const Client = ({ client, handleChangeClient, errors }) => {
  const id = ["cin", "nom", "prenom", "sexe"];
  const adresse = ["Rue", "Ville", "Code_postale"];
  const pass = ["password"];
  const naissnace = ["naissance"];
  const social = ["email", "telephone", "etat_civil"];
  return (
    <React.Fragment>
      <h3>Client Form</h3>
      <Containers
        errors={errors}
        items={id}
        title="Identity"
        cin={client.cin}
        nom={client.nom}
        prenom={client.prenom}
        sexe={client.sexe}
        handleChangeClient={handleChangeClient}
      />
      <Containers
        errors={errors}
        items={naissnace}
        title="Date of Birth"
        naissnace={client.naissance}
        handleChangeClient={handleChangeClient}
      />
      <Containers
        errors={errors}
        items={adresse}
        title="Addresse"
        adresse={client.adresse}
        handleChangeClient={handleChangeClient}
      />
      <Containers
        errors={errors}
        items={social}
        title="Social"
        email={client.email}
        telephone={client.telephone}
        etat_civil={client.etat_civil}
        handleChangeClient={handleChangeClient}
      />
      <Containers
        errors={errors}
        items={pass}
        title="Password"
        password={client.password}
        handleChangeClient={handleChangeClient}
      />
    </React.Fragment>
  );
};

export default Client;
