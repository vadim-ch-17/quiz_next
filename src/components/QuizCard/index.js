import { CardItem, CardLabel, CardSubtitle, CardImage } from "./style";
import React, { useState } from 'react';


const QuizCard = ({ quiz, idx }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CardItem>
            <div>
                <input id={`question${idx}`} name={`question${idx}`} className="hidden" />
                <CardLabel htmlFor={`question${idx}`}>
                    <CardSubtitle style={isHovered ? { backgroundColor: '#cf76f2' } : {}}>{quiz.answer}</CardSubtitle>
                    {quiz.image && <CardImage style={{ backgroundImage: `url(${quiz.image})` }}></CardImage>}

                </CardLabel>
            </div>
        </CardItem>
    )

}

export default QuizCard;