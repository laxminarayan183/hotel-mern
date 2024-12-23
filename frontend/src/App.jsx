import React from "react";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default App;
