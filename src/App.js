import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AppRoutes from "./utils/AppRoutes";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Auth from "./entities/Auth";
import authContext from "./shared/authContext";

const App = () => {
   return (
      <div>
         <Router>
            {/* <TopHeader /> */}
            <Header />
            <br />
            <Switch>
               <AppRoutes />
            </Switch>
            <Footer />
         </Router>
      </div>
   );
};

export default App;
