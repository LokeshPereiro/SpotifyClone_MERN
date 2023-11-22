import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./styles.scss";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Sidebar />
      <div className="childrenElements">{children}</div>
    </div>
  );
};

export default Layout;
