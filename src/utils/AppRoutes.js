import React from "react";
import { Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

let routes = [
   { path: "/", component: HomePage },
   { path: "/about", component: AboutPage },
   { path: "/contact", component: ContactPage },
];

const getRoutes = routes.map((route, i) => {
   return <Route key={i} exact path={route.path} component={route.component} />;
});

const AppRoutes = () => {
   return <div>{getRoutes}</div>;
};

export default AppRoutes;
