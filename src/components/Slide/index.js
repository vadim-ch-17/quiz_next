import React, { useState, useEffect, useRef, useMemo } from "react";
import ResponsiveImage from "../ResponsiveImage";
import Image from "next/image";
import theme from "@/styles/theme";
import Star from "../Star";
import { setTrimWords, readMoreHundler, getReviewImage } from "./componentUtils";

const Slide = ({ slide, content, slideChanged }) => {
    const { userReview, rating, name, user_avatar } = slide;

    const [readMore, setReadMore] = useState(false);
    const [openRewiew, setOpenRewiew] = useState(false);
    const [review, setReview] = useState(userReview);
    const [imageExists, setImageExists] = useState(false);
    const [shouldShowReadMore, setShouldShowReadMore] = useState(false);

    const textRef = useRef(null);


    useEffect(() => {

        if (textRef.current) {
            const fullHeight = textRef.current.scrollHeight - 4;
            const clampedHeight = textRef.current.offsetHeight;

            setShouldShowReadMore(fullHeight > clampedHeight);

        }
        getReviewImage(setImageExists, user_avatar, name);
    }, []);

    useEffect(() => {
        setReadMore(false);
        setTrimWords(readMore, setOpenRewiew)
    }, [slideChanged]);


    return (
        <div data-open={slideChanged} className={`slide font-mulish bg-white rounded-[40px] px-[52px] py-[33px] me-9 ms-9 min-h-[383px] w-auto`}>
            {imageExists ? (
                <Image
                    src={user_avatar.split("?")[0]}
                    alt={name}
                    height={70}
                    width={70}
                    className="avatar mx-auto rounded-full mb-[5px]"
                />
            )
                : (
                    <div className="h-[70px] w-[70px] mx-auto rounded-full mb-[5px] bg-blue text-white font-extrabold flex justify-center items-center text-4xl">
                        {name.slice(0, 1).toUpperCase()}
                    </div>
                )
            }
            <h2 className="text-mediumPrimary text-lg tracking-[0.3px] text-center font-bold mb-[10px]">{name}</h2>
            <div className="stars flex flex-row items-center gap-x-2 justify-center mb-10">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        type={"rating"}
                        height={24}
                        width={24}
                        color={`${rating > i ? theme.colors.gold : theme.colors.grayLg}`}
                        border={"transparent"}
                    />
                ))}
            </div>
            <div className="relative">
                <ResponsiveImage
                    src={'/assets/img/qq.svg'}
                    alt={"Slide"}
                    type={"svg"}
                    height={50}
                    width={62}
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
                    {shouldShowReadMore && <button className="text-blue font-normal text-[14px] tracking-[0.3px] hover:cursor-pointer hover:text-hoverBlue transition-colors duration-300 leading-6 uppercase text-left" aria-label={`Button ${readMore ? content.readLess : content.readMore}`} onClick={() => readMoreHundler(setReadMore, readMore, setOpenRewiew)}>{readMore ? content.readLess : content.readMore}</button>}
                </div>
            </div>
        </div>
    );
}

// export default Slide;
const MemoizedSlide = React.memo(Slide);

export default MemoizedSlide;