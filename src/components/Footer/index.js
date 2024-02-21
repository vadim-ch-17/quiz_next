import ButtonsContainer from "../ButtonsContainer";
import Navigation from "../Navigation";
import ResponsiveImage from "../ResponsiveImage";
import { useTranslation } from "next-i18next";
const Footer = () => {
    const { t } = useTranslation("common");
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-darkPrimary pt-[35px] pb-[18px]">
            <div className="container !max-w-[687px] pb-[39px] sm:pb-[67px] mb-[30px] sm:mb-[48px] relative after:content-[''] after:absolute after:h-[1px] after:w-[90%] lg:after:w-full after:left-2/4 after:-translate-x-2/4 after:bg-extraDarkGray after:bottom-0">
                <div className="flex justify-center mb-4">
                    <ResponsiveImage
                        src={t('footer.logo')}
                        alt={"Codevery Quiz"}
                        classes={" max-h-[61px] max-w-[147px] lg:max-h-[61px] lg:max-w-[147px] "}
                    />
                </div>
                <p className="text-center text-white font-dayOne mb-[35px] sm:mb-[60px] max-w-[227px] mx-auto sm:max-w-full ">{t('footer.title')}</p>
                <ButtonsContainer classContainer="justify-center " btnDownload="pink" btnDemo="blue" />
            </div>
            <Navigation typeLinks={"default"} classContainer={"flex flex-col sm:flex-row flex-wrap gap-[30px] sm:gap-[53px] mb-[38px] sm:mb-[48px] justify-center text-white"} />
            <p className="text-center text-[#AEB5C6] font-mulish font-bold text-xs">&copy; {currentYear} Codevery</p>
        </footer>
    );
}

export default Footer;