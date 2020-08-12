import React from "react";

import Auth from "../entities/Auth";

export const authContext = React.createContext(Auth); // Create a context object

// Export it so it can be used by other Components

export const AuthProvider = (props) => {
   return <authContext.Provider value={Auth}> {props.children} </authContext.Provider>;
};
