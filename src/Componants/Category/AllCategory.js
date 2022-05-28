import React from "react";
import Header from "../componants/Header";
import Category from "./Category";
import "./Category.css";

const AllCategory = () => {
  return <Header props={<Category />} />;
};

export default AllCategory;
