import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";

const Front = () => {
  return <Header props={<Dashboard />} />;
};

export default Front;
