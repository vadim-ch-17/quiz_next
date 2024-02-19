import React, { useState, createContext, useContext } from "react";
import Cookies from "js-cookie";
const defaultContext = {}

const Context = createContext(defaultContext);

export const LandingProvider = ({ children }) => {
    const [state, setState] = useState(defaultContext);
    const [cookies, setCookies] = useState(!!Cookies.get('privacy') || false);

    const value = {
        state,
        cookies,
        setState,
        setCookies
    };
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export const useLandingContext = () => useContext(Context);