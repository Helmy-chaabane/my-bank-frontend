import React from "react";
import Moment from "react-moment";
import { InputText } from "primereact/inputtext";

const Content = ({ client, update, ...rest }) => {
  return (
    <h5>
      <div className="p-grid">
        <div className="p-col-6">
          <span className="prof_title">CIN : </span>
          {client.cin}
        </div>
        <div className="p-col-6">
          <span className="prof_title">Started At : </span>
          <Moment format="DD MMM YYYY">{client.createdAt}</Moment>
        </div>
        <div className="p-col-6">
          <span className="prof_title">Email : </span>
          {(update && (
            <InputText
              placeholder={client.email}
              keyfilter="email"
              name="email"
              ref={rest.Email}
            />
          )) ||
            client.email}
        </div>
        <div className="p-col-4">
          <span className="prof_title">Telephone : </span>
          {(update && (
            <InputText
              placeholder={client.telephone}
              keyfilter="pnum"
              name="telephone"
              ref={rest.Telephone}
            />
          )) ||
            client.telephone}
        </div>
        <div className="p-col-4">
          <span className="prof_title">Street : </span>
          {(update && (
            <InputText
              placeholder={client.adresse.Rue}
              keyfilter="alpha"
              ref={rest.Street}
            />
          )) ||
            (client.adresse && client.adresse.Rue)}
        </div>
        <div className="p-col-4">
          <span className="prof_title">City : </span>
          {(update && (
            <InputText
              placeholder={client.adresse.Ville}
              keyfilter="alpha"
              ref={rest.City}
            />
          )) ||
            (client.adresse && client.adresse.Ville)}
        </div>
        <div className="p-col-4">
          <span className="prof_title">ZIP code : </span>
          {(update && (
            <InputText
              placeholder={client.adresse.Code_postale}
              ref={rest.Zip_Code}
              keyfilter="pnum"
            />
          )) ||
            (client.adresse && client.adresse.Code_postale)}
        </div>
        <div className="p-col-6">
          <span className="prof_title">civil status : </span>
          {(update && (
            <select ref={rest.Civil_Status} defaultValue={client.etat_civil}>
              <option>Célibataire</option>
              <option>Marié</option>
            </select>
          )) ||
            client.etat_civil}
        </div>
      </div>
    </h5>
  );
};

export default Content;
