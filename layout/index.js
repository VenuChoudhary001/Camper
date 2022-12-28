import React from "react";
import Navbar from "../components/navbar";
import { Provider } from "../context/searchContext";

const Layout = ({ children }) => {
  return (
    <>
      <Provider>
        <section className="font-primary">
        <Navbar/>
        {children}
        </section>
        </Provider>
    </>
  );
};

export default Layout;
