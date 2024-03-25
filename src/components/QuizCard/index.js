import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'next-i18next';


const QuizCard = ({ quiz, idx, step, field, isOneSelected, setIsOneSelected, withImage }) => {
    const { t } = useTranslation('quiz')
    const [correct, setCorrect] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setChecked(false)
    }, [step])

    const checkAnswer = () => {
        setCorrect(quiz.correct)
        setChecked(true)
    }

    return (
        <div>
            <div className={`${!checked && quiz.correct && isOneSelected && '!bg-black2Xl'} ${withImage ? 'pt-[30px] pb-[20px]' : 'pt-[7px] pb-[7px]'} bg-white  px-[20px]   rounded-[10px] shadow-cardMsg z-[1] relative box-border border-[1px] border-solid border-grayLg`}>
                <label className={`${!checked && quiz.correct && isOneSelected ? 'text-white' : 'text-darkPrimary'} text-xl font-semibold  pl-[45px] relative mb-0 
                ${!isOneSelected && 'cursor-pointer'}
                 group`} htmlFor={`question${idx}`} >
                    <input
                        type="radio"
                        id={`question${idx}`}
                        name={`question${idx}`}
                        {...field}
                        value={quiz.correct}
                        className="hidden"
                        checked={field.value === quiz.answer}
                        disabled={isOneSelected}
                        onChange={(e) => {
                            checkAnswer()

                            setIsOneSelected(e.target.checked);
                            field.onChange(quiz.correct);
                        }}
                        data-correct={checked}
                    />

                    <span className={`mb-4 pl-[45px] relative -top-[7px] h-auto block 
                        before:content-[''] before:absolute before:top-2/4 before:-translate-y-2/4 before:rounded-full before:box-border before:left-0 before:w-[27px] before:h-[27px] before:border-2 before:border-solid before:border-gray-300
                        after:content-[''] after:absolute after:top-2/4 after:-translate-y-2/4 after:rounded-full after:box-border after:left-[6px] after:w-[15px] after:h-[15px] after:border-0
                        transition-all duration-500
                        ${field.value !== quiz.answer && quiz.correct && isOneSelected && 'after:bg-successLight hover:after:bg-successLight group-hover:after:bg-successLight'}
                        ${!isOneSelected && 'hover:after:bg-pink group-hover:after:bg-pink '}
                        
                        ${checked && field.value !== quiz.answer && !quiz.correct && isOneSelected && 'after:bg-mediumError hover:after:bg-mediumError group-hover:after:bg-mediumError'}
                    `} >{quiz.answer}</span>
                    {quiz.image && <span className={`bg-[top_center] bg-cover bg-no-repeat pb-[52%] rounded-[10px] mt-[10px] block`} style={{ backgroundImage: `url(${quiz.image})` }}></span>}

                </label>
            </div>
            <div className={`w-full px-[28px] py-9 bg-white color-madiumBlack rounded-b-[10px] grid ${checked && isOneSelected ? 'grid-rows-[1fr] -mt-[7px] transition-all duration-500' : 'grid-rows-[0fr] -mt-[75px]'} items-center text-[.875em] shadow-cardMsg overflow-hidden box-border `}>
                <div className="min-h-0">
                    <span className={`${correct ? 'text-successLight' : 'text-mediumError'} font-bold text-2xl`}>
                        {correct ? t('answers.correct') : t('answers.incorrect')}
                    </span>
                    <p>
                        {quiz.message}
                    </p>
                </div>
            </div>
        </div>
    )

}
const MemoizedQuizCard = React.memo(QuizCard);
export { MemoizedQuizCard };