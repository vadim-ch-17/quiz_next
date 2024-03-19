import React, { useEffect } from "react";
import { GoArrowUp } from "react-icons/go";
import Button from "../Button";

const UpButton = () => {

    const toTopHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const scrollEvent = () => {
        const upButton = document.querySelector('.up-button');
        if (!upButton) return;
        (window.scrollY > 500) ?
            upButton.classList.remove('!hidden')
            : upButton.classList.add('!hidden');
    }
    useEffect(() => {

        window.addEventListener("scroll", scrollEvent, { passive: true });

        return () => {
            window.removeEventListener("scroll", scrollEvent, { passive: true });
        }
    }, []);

    return (
        <Button as="button" colorType="blue" onClick={toTopHandler} classes={`up-button !hidden !fixed !p-0 bottom-5 md:bottom-10 right-5 md:right-10 z-50 rounded-full text-white !min-w-0 !min-h-0 !h-[50px] md:!h-[74px] !w-[50px] md:!w-[74px] flex justify-center items-center`}>
            <GoArrowUp className="text-[26px] md:text-[36px]" />
        </Button>
    );
}

export default UpButton;