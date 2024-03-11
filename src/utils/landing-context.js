import React, { useState, createContext, useContext } from "react";
import Cookies from "js-cookie";

const defaultContext = {}

const Context = createContext(defaultContext);

export const LandingProvider = ({ children }) => {
    const [loader, setLoader] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [acceptCookies, setAcceptCookies] = useState(Cookies.get('privacy') === 'accepted' || false);
    const [rejectCookies, setRejectCookies] = useState(false);
    const [reviews, setReviews] = useState(null);

    const value = {
        acceptCookies,
        loader,
        isOpenModal,
        modalContent,
        rejectCookies,
        reviews,
        setAcceptCookies,
        setLoader,
        setIsOpenModal,
        setModalContent,
        setRejectCookies,
        setReviews,
    };
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export const useLandingContext = () => useContext(Context);