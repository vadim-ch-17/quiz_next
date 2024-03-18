import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "@/components/Layout";
import ResponsiveImage from "@/components/ResponsiveImage";
import Button from "@/components/Button";
import QuizCard from "@/components/QuizCard";

const Quiz = () => {
    const [start, setStart] = useState(false)
    const [question, setQuestion] = useState(0)
    const { t } = useTranslation('quiz')
    const questions = t('questions', { returnObjects: true })
    const handleTest = () => {
        start && questions.length - 1 > question ? setQuestion(question + 1) : setStart(true)
    }

    return (
        <Layout>
            <div className="container mx-auto pt-[102px] pb-[112px] max-w-[760px]">
                <div className={`${start ? 'hidden' : 'block'}`}>
                    <h1 className={`font-exo2 font-bold text-center text-[85px] uppercase text-pink leading-[100px] tracking-[0.05px] mb-[85px]`}>Dogs quiz (demo)</h1>
                    <p className="font-exo2 font-bold text-center text-[45px] text-darkPrimary leading-[54px] tracking-[0.03px] mb-[47px]">How well do you know them?</p>
                    <ResponsiveImage
                        src="/assets/img/quiz/main-image-quiz.webp"
                        alt={"Dog"}
                        height={467}
                        width={700}
                        classes="mx-auto rounded-[20px] mb-[34px]" />

                </div>
                <div className={`${start ? 'block' : 'hidden'} max-w-[650px] mx-auto mb-[51px]`}>
                    <h2 className={`font-exo2 font-medium text-center text-quizTitle uppercase text-black leading-[65px] tracking-[0.05px] mb-[85px] `}>{questions[question].question}</h2>
                    <div className="grid grid-cols-2 gap-[17px] justify-center">
                        {questions[question].answers.map((item, idx) => (
                            <QuizCard key={idx} quiz={item} idx={idx} />
                        ))}
                    </div>
                </div>
                <Button as={'button'} classes={'!max-w-fit mx-auto shadow-2xl'} onClick={() => handleTest()}>{start ? 'Next' : 'Start'}</Button>
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
