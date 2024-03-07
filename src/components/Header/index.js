import { useState } from "react";
import { useTranslation } from "next-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import ResponsiveImage from "../ResponsiveImage";
import Navigation from "../Navigation";
import { SpanStyle } from "./style";
import Link from "next/link";
import Button from "../Button";

const Header = ({ emptyNav, font }) => {
    const { t } = useTranslation("common");
    const [isOpenNav, setIsOpenNav] = useState(false);
    const eventHundler = () => {
        setIsOpenNav(!isOpenNav);
    };
    return (
        <header className={`${font.mulish.className} sticky top-0 z-30 shadow-3xl bg-darkPrimary font-mulish ${isOpenNav ? "rounded-b-[20px]" : ""}`}>
            <nav className="container-lg px-4 h-full justify-between py-0 lg:flex lg:py-4">
                <div className="flex items-center justify-between py-2 lg:py-0">
                    <Link href="/">
                        <ResponsiveImage
                            src={"/assets/img/logo_header.webp"}
                            alt={"Codevery Quiz"}
                            height={76}
                            width={116}
                            classes={"max-h-[69px] max-w-[104px] lg:max-h-[76px] lg:max-w-[116px] "}
                        />
                    </Link>
                    <button
                        onClick={eventHundler}
                        className={`block lg:hidden h-[22px] w-[22px] relative overflow-hidden`}
                        aria-label="burger"
                    >
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <SpanStyle key={idx} $top={idx} open={isOpenNav}></SpanStyle>
                        ))}
                    </button>
                </div>
                <div
                    className={`grid overflow-hidden lg:flex lg:items-center lg:overflow-visible ${isOpenNav ? "grid-rows-[1fr]" : "!grid-rows-[0fr]"} transition-all !duration-700}`}
                >
                    <div className="flex min-h-0 flex-col h-full w-full justify-self-center lg:flex-row">
                        {!emptyNav && <Navigation
                            classContainer={"flex flex-end flex-col lg:flex-row mr-0 lg:mr-6"}
                            classItem={"mb-4 lg:mb-0"}
                            classLink={" font-bold"}
                            typeLinks={"default"}
                            isOpenNav={isOpenNav}
                            setIsOpenNav={setIsOpenNav}
                        />}
                        <LanguageSwitcher setIsOpenNav={setIsOpenNav} />
                        <Button
                            as="a"
                            type="pink"
                            href={t("buttons.download.url")}
                            classes="flex justify-center items-center hover:cursor-pointer self-center w-full sm:w-auto mb-[60px] lg:mb-0 ml-0 lg:ml-6 min-w-[182px] tracking-[.03em]"
                            label={t("buttons.download.title")}
                        >
                            {t("buttons.download.title")}
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;