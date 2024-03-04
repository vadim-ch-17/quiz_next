import { useTranslation } from "next-i18next";
import ResponsiveImage from "../ResponsiveImage";
import { useLandingContext } from "@/utils/landing-context";
import Button from "../Button";

const SendSuccess = () => {
    const { t } = useTranslation("common");
    const { title, message, image, button } = t("messages.success", { returnObjects: true });
    const { setIsOpenModal } = useLandingContext();

    return (
        <div className="flex flex-col items-center justify-center pb-[50px] sm:pb-[70px] sm:px-8 md:px-[100px] min-w-full w-full lg:max-w-[900px]">
            <ResponsiveImage
                src={image}
                alt={title}
                classes="max-h-[300px] w-auto mb-5"
            />
            <h2 className={` text-center text-[25px] sm:text-4xl mb-5 font-bold`}>{title}</h2>
            <p className={`text-center text-lg sm:text-xl`}>{message}</p>
            <Button as="button" type="blue" classes={` !text-lg mt-9 uppercase`} onClick={() => setIsOpenModal(false)}>{button}</Button>
        </div>
    );
}

export default SendSuccess;