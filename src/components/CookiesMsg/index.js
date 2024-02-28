import Cookies from "js-cookie";
import { useTranslation } from 'next-i18next';
import React, { useState, createContext, useContext } from "react";
import { Manrope, Mulish } from "next/font/google";
import { FaXmark } from "react-icons/fa6";
import { useLandingContext } from "@/utils/landing-context";

import Button from "../Button";

const mulish = Mulish({
    weight: ["400", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const manrope = Manrope({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"]
});

const CookiesMsg = () => {
    const { t } = useTranslation("common");
    const { title, message, buttons } = t("messages.cookies", { returnObjects: true });
    const { acceptCookies, setAcceptCookies, setRejectCookies } = useLandingContext();

    const setAcceptPrivacy = () => {
        const date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
        Cookies.set('privacy', 'accepted', { expires: +date.toUTCString() });
        setAcceptCookies(true);
    }

    const rejectCookies = () => {
        Cookies.set('privacy', 'rejected');
        console.log(Cookies.get('privacy'));
        setRejectCookies(true);
    }

    const actions = {
        accept: setAcceptPrivacy,
        reject: rejectCookies
    }

    return (
        <div className="fixed left-2 bottom-2 rounded-[20px] shadow-card z-100 bg-white px-11 py-10 max-w-[376px] text-xlPripary  text-manrope">
            <button className="absolute right-5 top-5 text-xl text-darkPrimary hover:text-lightPrimary" aria-label="close window" onClick={rejectCookies}><FaXmark /></button>
            <h2 className={`${mulish.className} text-[15px] font-semibold mb-[18px] text-center tracking-[0.3px] leading-5`}>{title}</h2>
            <p className={`${mulish.className} text-xs mb-[30px] tracking-[0.3px] leading-5`}>{message}</p>
            <div className="flex gap-4">
                {buttons.length > 0 && buttons.map((btn, index) => {
                    return <Button key={index} as="button" type={btn.type} classes={`${manrope.className} !min-h-[50px] w-full !min-w-0 `} fontSize="!text-[14px]" label={btn.title} onClick={actions[btn.action]}>{btn.title}</Button>
                })}
            </div>
        </div>
    );
}

export default CookiesMsg;