import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SigninPage from "../pages/signin/signInPage";
import ProfilePage from "../pages/profile/ProfilePage";

// routes goes here ---------->

let routes = [
   { path: "/", component: HomePage },
   { path: "/about", component: AboutPage },
   { path: "/contact", component: ContactPage },
   { path: "/signin", component: SigninPage },
   { path: "/profile", component: ProfilePage },
];

const AppRoutes = () => {
   return (
      <div>
         {routes.map((route, i) => {
            return <Route key={i} exact path={route.path} component={route.component} />;
         })}
      </div>
   );
};

export default AppRoutes;
