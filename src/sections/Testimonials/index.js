
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLandingContext } from "@/utils/landing-context";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

// import Title from "@/components/Title";
// import Slide from "@/components/Slide";
import { MemoizedTitle } from "@/components/Title";
import MemoizedSlide from "@/components/Slide";
import { TestimonialsContainer } from "./style";
import { getDataReviews } from "./componentUtils";

const Testimonials = ({ content, font }) => {
    const swiperRef = useRef(null);
    const [reviewsData, setReviewsData] = useState([]);
    const [slideChanged, setSlideChanged] = useState(false);
    const memoizedContent = useMemo(() => content, [content]);
    const memoizedFont = useMemo(() => font, [font]);
    const memoizedTitleContent = useMemo(() => ({
        title: content.title,
        subTitle: content.subTitle
    }), [content.title, content.subTitle]);

    const { reviews } = useLandingContext();

    useEffect(() => {
        if (!reviews) return;
        setReviewsData(getDataReviews(reviews));
        return () => {
            setReviewsData([]);
        }
    }, [reviews])

    useEffect(() => {
        if (slideChanged) {
            setSlideChanged(false);
        }
    }, [slideChanged]);

    return reviewsData.length && (
        <div id="testimonials" className="bg-gray4Xl pb-0 md:pb-28 pt-[24px] md:pt-[70px]">
            <MemoizedTitle content={memoizedTitleContent} tag="h2" classContainer="mb-0 md:mb-[64px]" />
            <TestimonialsContainer>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    breakpoints={{
                        320: {
                            initialSlide: 0,
                            slidesPerView: 1.2,
                            spaceBetween: '20px',
                            centeredSlides: false,
                            speed: 1000,
                        },
                        768: {
                            initialSlide: 1,
                            slidesPerView: 3,
                            spaceBetween: '-20px',
                            centeredSlides: true,
                            loop: true,
                            speed: 500,
                            autoplay: {
                                delay: 300,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false,
                                reverseDirection: true,
                            },
                        },
                    }}
                    pagination={{ el: '.dots', clickable: true, dynamicBullets: true, dynamicMainBullets: 2, type: 'bullets' }}

                    onSlideChangeTransitionEnd={() => {
                        setSlideChanged(true);
                    }}

                >
                    {reviewsData.length && reviewsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MemoizedSlide slide={item} font={memoizedFont} content={memoizedContent} slideChanged={slideChanged} />
                        </SwiperSlide>
                    ))}
                    {reviewsData.length && reviewsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <MemoizedSlide slide={item} font={memoizedFont} content={memoizedContent} slideChanged={slideChanged} />
                        </SwiperSlide>
                    ))}


                    <div className="slider-navigation hidden md:flex justify-center mt-5">
                        <div className="button-prev rounded-full h-[54px] w-[54px] bg-blue text-white flex justify-center items-center hover:cursor-pointer"><GoArrowLeft className=' text-[28px]' /></div>
                        <div className="dots flex items-center justify-center !w-auto mx-28 !translate-x-0"></div>
                        <div className="button-next rounded-full h-[54px] w-[54px] bg-blue text-white flex justify-center items-center hover:cursor-pointer"><GoArrowRight className=' text-[28px]' /></div>
                    </div>
                </Swiper>
            </TestimonialsContainer>
        </div >
    );
}

export default Testimonials;