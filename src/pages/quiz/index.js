import React, { useState, useMemo } from "react";
import { useForm, Controller } from 'react-hook-form';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import ResponsiveImage from "@/components/ResponsiveImage";
import Button from "@/components/Button";
// import QuizCard from "@/components/QuizCard";
import { MemoizedQuizCard } from "@/components/QuizCard";

const Quiz = () => {
    const [start, setStart] = useState(false)
    const { control, handleSubmit, setValue } = useForm();
    const [step, setStep] = useState(0);
    const [last, setLast] = useState(false)
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(0)
    const [isOneSelected, setIsOneSelected] = useState(false);


    const { t } = useTranslation('quiz')
    const questions = t('questions', { returnObjects: true })
    const final = t('final', { returnObjects: true })

    const DynamicCertificateQuiz = dynamic(() => import("@/components/CertificateQuiz"))

    const onSubmit = (data) => {
        setIsOneSelected(false);
        if (data[`step${step + 1}`]) {
            setScore(score + 5);
        }

        if (step < questions.length - 1) {
            setStep(step + 1);
        }
        if (step === questions.length - 1) {
            setLast(true)
        }
    };

    const handleTest = () => {
        start && questions.length - 1 > question ? setQuestion(question + 1) : setStart(true)
    }

    return (
        <Layout>
            <div className="bg-gray3Xl">
                <div className="container mx-auto pt-[102px] pb-[112px] max-w-[760px]">
                    <div className={`${start ? 'hidden' : 'block'}`}>
                        <h1 className={`font-exo2 font-bold text-center text-[85px] uppercase text-pink leading-[100px] tracking-[0.05px] mb-[85px]`}>{t('title')}</h1>
                        <p className="font-exo2 font-bold text-center text-[45px] text-darkPrimary leading-[54px] tracking-[0.03px] mb-[47px]">{t('subTitle')}</p>
                        <ResponsiveImage
                            src="/assets/img/quiz/main-image-quiz.webp"
                            alt={"Dog"}
                            height={467}
                            width={700}
                            classes="mx-auto rounded-[20px] mb-[34px]" />
                        <Button as={'button'} classes={`!max-w-fit mx-auto shadow-2xl`} onClick={() => handleTest()}>{start ? t("buttons.next") : t("buttons.start")}</Button>


                    </div>
                    <form className={`${start && !last ? 'block' : 'hidden'} max-w-[650px] mx-auto mb-[51px]`} onSubmit={handleSubmit(onSubmit)}>
                        <h2 className={`font-exo2 font-medium text-center text-quizTitle uppercase text-darkPrimary leading-[65px] tracking-[0.05px] mb-[85px] `}>{questions[step].question}</h2>
                        <Controller
                            name={`step${step + 1}`}
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <div className={`grid ${questions[step].withImage ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'} gap-[17px] justify-center`}>
                                    {questions[step].answers.map((item, idx) => (
                                        <MemoizedQuizCard key={idx}
                                            quiz={item}
                                            idx={idx}
                                            step={step}
                                            field={field}
                                            isOneSelected={isOneSelected}
                                            setIsOneSelected={setIsOneSelected}
                                            withImage={questions[step].withImage} />
                                    ))}

                                </div>
                            )}
                        />
                        <Button as={'button'} type="submit" colorType={!isOneSelected ? 'disabled' : ''} disabled={!isOneSelected} classes={`${!isOneSelected && 'cursor-no-drop'} !max-w-fit mx-auto shadow-2xl mt-[85px]`}>{start ? t("buttons.next") : t("buttons.start")}</Button>

                    </form>
                    {last && (
                        <div>
                            <h2 className="text-2xl sm:text-quizTitle font-medium text-center mb-6 md:mb-[68px]">{final[score].title}</h2>
                            <p className="text-center font-normal text-lg mb-10" dangerouslySetInnerHTML={{ __html: final[score].points }}></p>
                            {score < 15 && <p className="text-center font-normal text-lg mb-6">{final[score].message}</p>}
                            {score < 15 ? <ResponsiveImage
                                src={final[score].image}
                                alt={final[score].alt}
                                height={362}
                                width={460}
                                classes="mx-auto mb-[34px]" />
                                : <DynamicCertificateQuiz content={final[score]} />}
                        </div>

                    )}
                </div>
            </div>
        </Layout>
    );
}

export default Quiz;

export const getStaticProps = async ({ locale, res }) => {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'navigation', 'quiz'])),
        },
        revalidate: 3600,
    };
};
