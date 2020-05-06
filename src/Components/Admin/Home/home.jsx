import React from "react";
import "./home.css";

const Home = (props) => {
  const lists = [
    { title: "Consult Clients", link: "/admin/consultClients" },
    { title: "New Client", link: "/admin/addClient" },
    { title: "Transfers", link: "/admin/virements" },
  ];
  return (
    <div className="home">
      <div className="row">
        {lists.map((list) => {
          return (
            <div key={list.title} className="flip-card m-5">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="middle">{list.title}</div>
                </div>
                <div
                  className="flip-card-back"
                  onClick={() => {
                    props.history.push(`${list.link}`);
                  }}
                >
                  <span className="pi pi-arrow-right middle_arrow"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
