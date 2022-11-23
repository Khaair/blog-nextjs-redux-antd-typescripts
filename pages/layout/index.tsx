import React from "react";
import { useCallback, useEffect, useState } from "react";

// import Footer from "../Components/Footer";
import Header from "./header/index";
import Footer from "./footer/index";
const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
