import React from "react";
import "./dashboard.css";
import Birds from "../images/birdss.svg";

function Dashboard() {
  return (
    <div className="dashboard">
      <img src={Birds} alt="Bird" />
    </div>
  );
}

export default Dashboard;
