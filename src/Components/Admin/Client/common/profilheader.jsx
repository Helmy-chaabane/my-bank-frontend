import React from "react";
import { Card } from "primereact/card";

const ProfilHeader = ({ title, children, footer }) => {
  return (
    <div className="profile_client">
      <Card title={title} className="ui-card-shadow" footer={footer}>
        {children}
      </Card>
    </div>
  );
};

export default ProfilHeader;
