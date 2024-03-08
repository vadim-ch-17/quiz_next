import useIntersectionObserver from "@/hooks/intersection-observer";
import { useRef, useEffect, useState } from "react";
import { scrollPosition } from "./componentUtils";

const CardHowItWorksV2 = ({ cardContent, idx, refContainer, fixedSection, slide, setSlide }) => {
    const slideContainer = useRef(null);

    const [ref, inView, setRoot, current, intersectingElement] = useIntersectionObserver({
        root: refContainer,
        rootMargin: '0px 0px 0px 0px',
    })
    const { title, description, image } = cardContent;

    const rotatePisition = ['rotate-[0deg]', 'rotate-[28deg] sm:rotate-[30deg] md:rotate-[40deg]', 'rotate-[52deg] sm:rotate-[60deg] md:rotate-[80deg]', 'rotate-[80deg] sm:rotate-[90deg] md:rotate-[120deg]', 'rotate-[108deg] sm:rotate-[120deg] md:rotate-[160deg]']

    useEffect(() => {
        setSlide(current);
    }, [inView]);


    useEffect(() => {
        const isLargeScreen = window.matchMedia("(min-width: 768px)").matches;
        const speedRotate = isLargeScreen ? 50 : 45;
        const scrollBetween = isLargeScreen ? [0, 185] : [0, 140];
        const rootElement = document.querySelector('.target');

        setRoot(rootElement);

        document.addEventListener('scroll', scrollPosition.bind(null, speedRotate, scrollBetween, fixedSection, slideContainer), { passive: true })

        return () => {
            document.removeEventListener('scroll', scrollPosition, { passive: true })
        }

    }, [])

    return (
        <div>
            <div ref={slideContainer} className={`slide-container h-full w-full absolute -left-[535px] sm:-left-[593px] rotate-0 transition-all duration-300`}>
                <div ref={ref} data-curent={current} data-active={`card-${idx}`} className={`item h-[100px] w-[1050px] sm:w-[1090px] pr-[142px] sm:pr-[87px] md:pr-[90px] text-right absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 ${rotatePisition[idx]}`}>
                    <p className="relative top-2/4 -translate-y-2/4 right-0">
                        <span className={`${!inView ? 'text-gray6Xl after:bg-gray6Xl before:bg-transparemt text-[40px] md:text-[69px]' : 'text-mediumPrimary after:bg-blue before:bg-blue text-[40px] md:text-[89px] '}  
    after:content-[''] after:h-[18px] after:w-[18px] md:after:h-[32px] md:after:w-[32px] after:block after:rounded-full after:absolute after:-right-[30px] sm:after:-right-[50px] md:after:-right-[60px] after:top-2/4 after:-translate-y-2/4 
    before:content-[''] before:h-[18px] before:w-[18px] md:before:h-[32px] md:before:w-[32px] before:block before:rounded-full before:absolute before:right-[140px] before:top-2/4 before:-translate-y-2/4`}>0{idx + 1} </span>
                    </p>
                </div>
            </div>
            <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 max-w-60 xs:max-w-72 sm:max-w-96 md:max-w-[470px] lg:max-w-[500px] text-mediumPrimary absolute w-max top-[18px] sm:top-[35px] md:-top-[225px] -left-[80px] sm:left-0 md:left-[102%]`}>
                <h3 className={` text-[18px] md:text-[30px] font-extrabold mb-[16px] text-left`}>{title}</h3>
                <p className={` text-[14px] md:text-[15px] text-left font-normal max-w-full xs:max-w-[460px] leading-[26px] tracking-[0.3px] mb-[20px]`}>{description}</p>
                <picture>
                    <source
                        media="(max-width: 700px)"
                        srcSet={`${image}300.webp`}
                    />
                    <source
                        media="(max-width: 1000px)"
                        srcSet={`${image}full.webp`}
                    />
                    <img
                        className="max-h-[400px]"
                        src={`${image}full.webp`}
                        alt={title}
                        loading="lazy"
                        height={295}
                    />
                </picture>
            </div>
        </div>



    )
}

export default CardHowItWorksV2;
