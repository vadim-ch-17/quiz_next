
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import Title from "@/components/Title";
import Slide from "@/components/Slide";
import { TestimonialsContainer } from "./style";
const Testimonials = ({ content, font }) => {
    const swiperRef = useRef(null);

    // useEffect(() => {
    //     if (swiperRef.current) {
    //         const swiper = swiperRef.current.swiper;

    //         const toggleButtonPrev = () => {
    //             const action = swiper.activeIndex === 1 ? 'add' : 'remove';
    //             document.querySelector('.button-prev').classList[action]('swiper-button-disabled');
    //         };

    //         const toggleButtonNext = () => {
    //             const action = swiper.activeIndex === swiper.slides.length - 2 ? 'add' : 'remove';
    //             document.querySelector('.button-next').classList[action]('swiper-button-disabled');
    //         };

    //         toggleButtonPrev();
    //         swiper.on('slideChange', () => {
    //             toggleButtonNext();
    //             toggleButtonPrev();
    //         });
    //     }
    // }, []);

    return (
        <div id="testimonials" className="bg-lightGrey pb-0 md:pb-28 pt-[24px] md:pt-[70px]">
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-0 md:mb-[64px]" />
            <TestimonialsContainer>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={3}
                    initialSlide={1}
                    navigation={{
                        nextEl: '.button-next',
                        prevEl: '.button-prev',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: '20px',
                            centeredSlides: false,
                        },
                        768: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        },
                    }}
                    loop={false}
                    pagination={{ el: '.dots', clickable: true, dynamicMainBullets: 1, type: 'bullets' }}
                    speed={500}

                >
                    {content.reviews && content.reviews.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Slide slide={item} font={font} />
                        </SwiperSlide>
                    ))}


                    <div className="slider-navigation hidden md:flex justify-center mt-5">
                        <div className="button-prev rounded-full h-[54px] w-[54px] bg-blue text-white flex justify-center items-center hover:cursor-pointer"><GoArrowLeft className=' text-[28px]' /></div>
                        <div className="dots flex items-center justify-center !w-auto mx-28"></div>
                        <div className="button-next rounded-full h-[54px] w-[54px] bg-blue text-white flex justify-center items-center hover:cursor-pointer"><GoArrowRight className=' text-[28px]' /></div>
                    </div>
                </Swiper>
            </TestimonialsContainer>
        </div>
    );
}

export default Testimonials;