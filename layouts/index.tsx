import React from "react";
import Header from "./header/index";
import Footer from "./footer/index";
import Admin from "../pages/login";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const token = JSON.parse(localStorage.getItem("accessToken") as string);
  if (token) {
    return (
      <React.Fragment>
        <Header />
        {children}
        <Footer />
      </React.Fragment>
    );
  } else {
    <Admin />;
    router.push("/login");
  }
};
export default Layout;
