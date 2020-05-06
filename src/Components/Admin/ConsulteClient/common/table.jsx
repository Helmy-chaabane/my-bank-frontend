import React from "react";

const Table = ({ clients, history }) => {
  const goToClient = (id) => {
    history.push("/admin/ClientProfile/" + id);
  };

  return (
    <table className="table  table-light">
      <thead className="thead-dark">
        <tr>
          <th scope="col">CIN</th>
          <th scope="col">Name</th>
          <th scope="col">SurName</th>
          <th scope="col">City</th>
          <th scope="col">Hood</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => {
          return (
            <tr key={client._id} onClick={() => goToClient(client._id)}>
              <th>{client.cin}</th>
              <td>{client.nom}</td>
              <td>{client.prenom}</td>
              <td>{client.adresse.Ville} </td>
              <td>
                {client.adresse.Rue} {client.adresse.Code_postale}
              </td>
              <td colSpan="1">{client.email}</td>
              <td>{client.telephone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
