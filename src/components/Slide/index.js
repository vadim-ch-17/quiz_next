import React, { useState, useEffect, useRef } from "react";
import ResponsiveImage from "../ResponsiveImage";
import theme from "@/styles/theme";
import Star from "../Star";
const Slide = ({ slide, font, content }) => {
    const [readMore, setReadMore] = useState(false);
    const [openRewiew, setOpenRewiew] = useState(false);
    const [review, setReview] = useState(slide.review);
    const textRef = useRef(null);
    const [shouldShowReadMore, setShouldShowReadMore] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const fullHeight = textRef.current.scrollHeight - 4;
            const clampedHeight = textRef.current.offsetHeight;

            if (fullHeight > clampedHeight) {
                setShouldShowReadMore(true);
            }
        }
    }, []);

    const setTrimWords = () => {
        !readMore ? setOpenRewiew(true)
            : setTimeout(() => {
                setOpenRewiew(false);
            }, 300);
    }

    const readMoreHundler = () => {
        setReadMore(!readMore);
        setTrimWords()

    };

    return (
        <div className={`slide ${font.className} bg-white rounded-[40px] px-[52px] py-[33px] shadow-card me-9 ms-9 min-h-[383px] w-auto`}>
            {slide.user_avatar && <ResponsiveImage
                src={slide.user_avatar}
                alt={slide.name}
                classes="avatar w-[70px] h-[70px] mx-auto rounded-full mb-[5px]"
            />}
            <h2 className="text-mediumPrimary text-lg tracking-[0.3px] text-center font-bold mb-[10px]">{slide.name}</h2>
            <div className="stars flex flex-row items-center gap-x-2 justify-center mb-10">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        type={"rating"}
                        height={24}
                        width={24}
                        color={`${slide.rating > i ? theme.colors.gold : theme.colors.grayLg}`}
                        border={"transparent"}
                    />
                ))}
            </div>
            <div className="relative">
                <ResponsiveImage
                    src={'/assets/img/qq.svg'}
                    alt={"Slide"}
                    type={"svg"}
                    classes="qq absolute -left-[13px] -top-[26px] w-auto h-[50px]"
                />

                <div
                    className={`relative grid overflow-hidden transition-all duration-300 ${readMore ? "grid-rows-[1fr]" : "!grid-rows-[0fr] "}`}
                >

                    <p
                        ref={textRef}
                        className={`review ${openRewiew ? '' : 'typography'} font-semibold min-h-[68px] overflow-hidden text-mediumPrimary text-[14px] tracking-[0.3px] leading-6`}>
                        {review}
                    </p>
                    {shouldShowReadMore && <a className="text-blue font-normal text-[14px] tracking-[0.3px] hover:cursor-pointer hover:text-hoverBlue transition-colors duration-300 leading-6 uppercase" onClick={readMoreHundler}>{readMore ? content.readLess : content.readMore}</a>}
                </div>
            </div>
        </div>
    );
}

export default Slide;