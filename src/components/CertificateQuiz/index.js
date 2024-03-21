import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { sendEmail } from "./componentUtils";
import { validationForm } from "./componentUtils";
import ResponsiveImage from "../ResponsiveImage";
import { useLandingContext } from "@/utils/landing-context";
import Loader from "../Loader";
import Link from "next/link";

const CertificateQuiz = ({ content }) => {
    const { t } = useTranslation("quiz");
    const formInputMessages = t("certificat.form.errors", { returnObjects: true })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: yupResolver(validationForm(formInputMessages)) });
    const certificateRef = useRef(null);
    const { setIsOpenModal, setModalContent, setLoader } = useLandingContext();
    const baseUrl = window.location;

    const submitForm = (data) => {

        setLoader(true)
        reset()
        sendEmail(data, certificateRef).then(res => {
            setIsOpenModal(false);
            setIsOpenModal(true);
            setLoader(false)
            setModalContent("SendSuccess");

        })
    };

    return (
        <>
            <div className="max-w-[600px] mx-auto ">
                <div ref={certificateRef} className={`shadow-certificete py-[10px] px-[15px] sm:pt-[17px] sm:pl-[20px] sm:pb-[25px] sm:pr-[40px] mb-2 flex justify-between overflow-hidden relative box-border min-h-[294px] rounded-[25px] bg-certificate`}>
                    <div className="cquiz-certificate__column flex flex-col justify-between items-center text-center w-[47%]">
                        <div className="background-bow h-[140%] -top-[50px] rotate-[20deg] bottom-0 absolute right-[42%] after:w-5 after:absolute after:bg-pink after:h-[140%] after:-right-[9px] after:bottom-0 after:-top-[50px]">
                            <div className="bow-bg h-[128px] w-[128px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
                                <ResponsiveImage
                                    src="/assets/img/quiz/bow.svg"
                                    alt={"Bow"}
                                    type={"svg"}
                                    height={128}
                                    width={128}
                                    classes="mx-auto w-[70px] sm:w-[100px] h-auto " />
                            </div>
                        </div>
                        <p className="cquiz-certificate__title uppercase text-xl sm:text-4xl pt-1 text-darkPrimary font-bold">
                            {t("certificat.title")}
                        </p>
                        <div className="cquiz-certificate__promocode">
                            <p className="cquiz-certificate__promocode-title text-sm mb-[15px] uppercase font-bold"> {t("certificat.promo")}</p>
                            <p className=" px-[10px] sm:px-[25px] py-[5px] sm:py-[15px] uppercase rounded-[10px] bg-pink w-fit text-2xl sm:text-[30px] text-darkPrimary font-bold leading-none">PTTCQDHY</p>
                        </div>
                        <div className="cquiz-certificate__footer text-sm font-bold text-successDark underline break-normal pr-3 sm:pr-0">
                            {baseUrl && <Link href={baseUrl.origin} className="break-normal">{baseUrl.host}</Link>}
                        </div>
                    </div>
                    <div className="cquiz-certificate__column second w-[36%] flex flex-col justify-between">

                        <p className="cquiz-certificate__sale text-right text-pink uppercase font-bold pt-[14px] text-lg sm:text-[30px]"> {t("certificat.sale")} </p>
                        <div className="cquiz-certificate__sale-percent text-right text-pink font-bold text-[70px] sm:text-[90px] tracking-[-5px]">
                            <p>10<span className="text-[30px] sm:text-[53px]">%</span></p>
                        </div>
                        <div className="cquiz-certificate__expiration text-white w-fit ml-auto mr-[10%] pt-2 text-center text-sm font-bold">
                            <p><span className="cquiz-certificate__expiration-text uppercase"> {t("certificat.valid")}:</span><br /> <span className="cquiz-certificate__expiration-date"> {t("certificat.months")} 1, 2024</span></p>
                        </div>
                    </div>
                </div>
                {content && content.message && <p className="text-sm font-semibold mb-[20px] sm:mb-[60px]">{content.message}</p>}
                <form onSubmit={handleSubmit(submitForm)}>
                    <p className="mb-4">{t("certificat.form.title")}</p>
                    <div className="flex">
                        <label htmlFor="sendEmail" className="w-full">

                            <input className=" border-[2px] border-grayXl h-full px-5 py-2 rounded-[33px] w-full max-w-[90%]" type="email" id="sendEmail" placeholder={t("certificat.form.placeholder")} {...register("email")} />
                        </label>
                        <Button type="submit" as={'button'} colorType={Object.keys(errors).length > 0 ? 'disabled' : ''} disabled={Object.keys(errors).length > 0} classes={`!w-fit !min-w-[140px] !min-h-0 !px-[10px] shadow-2xl `}>{t("certificat.form.button")}</Button>
                    </div>
                    {errors?.email && <p className="text-sm text-mediumError font-bold">{errors?.email?.message || 'Icorrect Email'}</p>}
                </form>
            </div>
            <Loader />
        </>
    );
}

export default CertificateQuiz;