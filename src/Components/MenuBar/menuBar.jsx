import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "./menuBar.css";

const MenuBar = ({ logout, links }) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="collapse navbar-collapse" id="navbarNav">
        <Link className="navbar-brand link" to="#">
          Bank
        </Link>
        <ul className="navbar-nav">
          {links.map((link) => {
            return (
              <li className="nav-item" key={link.name}>
                <Link className="nav-link link" to={link.url}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        label="Logout"
        className="p-button-raised p-button-info foot font-weight-bold"
        icon="pi pi-sign-out"
        iconPos="left"
        onClick={() => logout()}
      />
    </nav>
  );
};

export default MenuBar;
