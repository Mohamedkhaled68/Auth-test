import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/signup">Create a New Account ? </Link>
      or
      <Link to="/signup">You already have account </Link>
    </div>
  );
};

export default Dashboard;
