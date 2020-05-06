import React from "react";
import male from "./imgs/male.png";
import female from "./imgs/female.png";
import Content from "./content";

const ClientDisplay = ({ client, update, ...rest }) => {
  const getImage = (sexe) => {
    switch (sexe) {
      case "Homme":
        return male;
      case "Femme":
        return female;
      default:
        return;
    }
  };
  return (
    <div className="row">
      <div className="col-2 m-2">
        <img
          alt="user"
          src={getImage(client.sexe)}
          style={{ width: "200px" }}
        />
      </div>
      <div className="col m-2">
        <Content client={client} update={update} {...rest} />
      </div>
    </div>
  );
};

export default ClientDisplay;
