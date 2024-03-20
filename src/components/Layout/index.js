import Header from "../Header";
import Footer from "../Footer";
import Seo from "../Seo";
import dynamic from "next/dynamic";
import { useLandingContext } from "@/utils/landing-context";
import { useTranslation } from "next-i18next";



const Layout = ({ children }) => {
    const { t } = useTranslation("common");
    const seo = t("seo", { returnObjects: true });

    const { acceptCookies, rejectCookies, modalContent } = useLandingContext();

    const DynamicCookiesMsg = !acceptCookies ? dynamic(() => import("@/components/CookiesMsg")) : null;
    const ModalDynamic = modalContent ? dynamic(() => import(`@/components/Modal`)) : null;
    const ModalContent = modalContent ? dynamic(() => import(`@/components/${modalContent}`)) : null;
    return (
        <div className="pt-[84px] lg:pt-0">
            <Seo seo={seo} />
            <Header emptyNav={false} />
            <main className=" font-mulish">{children}</main>
            {DynamicCookiesMsg && !rejectCookies ? <DynamicCookiesMsg /> : null}
            {ModalDynamic && <ModalDynamic>
                {ModalContent && <ModalContent />}
            </ModalDynamic>}
            <Footer />
        </div>
    );
}

export default Layout;