import { Mulish } from "next/font/google";
import ResponsiveImage from "../ResponsiveImage";
import useIntersectionObserver from "@/hooks/intersection-observer";
import { useRef, useEffect, useState } from "react";
const mulish = Mulish({
    weight: ["400", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const CardHowItWorksV2 = ({ cardContent, idx, refContainer, fixedSection }) => {
    const slideContainer = useRef(null);
    const [scrollFull, setScrollFull] = useState(0);

    const [ref, inView, setRoot, current] = useIntersectionObserver({
        root: refContainer,
        rootMargin: '-30px 0px -30px 0px',
    })
    const { title, description, image } = cardContent;
    const rotatePisition = ['rotate-[0deg]', 'rotate-[28deg] sm:rotate-[30deg] md:rotate-[40deg]', 'rotate-[52deg] sm:rotate-[60deg] md:rotate-[80deg]', 'rotate-[80deg] sm:rotate-[90deg] md:rotate-[120deg]', 'rotate-[108deg] sm:rotate-[120deg] md:rotate-[160deg]']
    // const rotatePisition = ['rotate-[0deg]', 'rotate-[18deg] sm:rotate-[20deg] md:rotate-[30deg]', 'rotate-[38deg] sm:rotate-[40deg] md:rotate-[60deg]', 'rotate-[58deg] sm:rotate-[60deg] md:rotate-[90deg]', 'rotate-[78deg] sm:rotate-[80deg] md:rotate-[120deg]', 'rotate-[130deg] md:rotate-[150deg]']

    useEffect(() => {
        const rootElement = document.querySelector('.target');
        setRoot(rootElement);
    }, [])
    const scrollPosition = (speedRotate, scrollBetween, e) => {
        const scroll = Math.round(
            (window.pageYOffset - fixedSection.current.offsetTop + 55) / 10,
        );

        const scrolled = (scroll * 100) / speedRotate;
        const styleRotate = (window.matchMedia("(min-width: 768px)").matches)
            ? `rotate(-${scrolled - 20}deg)`
            : `rotate(-${scrolled >= 20 ? scrolled - 2 : scrolled}deg)`

        if (scrolled >= scrollBetween[0] && scrolled <= scrollBetween[1]) {
            slideContainer.current.style.transform = styleRotate;
            setScrollFull(scrolled);
        }
    }

    useEffect(() => {
        const speedRotate = (window.matchMedia("(min-width: 768px)").matches) ? 50 : 20;
        const scrollBetween = (window.matchMedia("(min-width: 768px)").matches) ? [20, 185] : [0, 140];

        document.addEventListener('scroll', scrollPosition.bind(null, speedRotate, scrollBetween), { passive: true })

        return () => {
            document.removeEventListener('scroll', scrollPosition, { passive: true })
        }

    }, [])
    return (
        <>
            <div ref={slideContainer} className={`slide-container h-full w-full absolute -left-[556px] sm:-left-[593px] rotate-0`}>
                <div ref={ref} data-active={`card-${idx}`} className={`item ${inView ? current : ''}  h-[100px] w-[1092px] sm:w-[1090px] pr-[160px] sm:pr-[87px] md:pr-[90px] text-right absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 ${rotatePisition[idx]}`}>

                    <p className="relative top-2/4 -translate-y-2/4 right-0">
                        <span className={`${mulish.className} ${!inView ? 'text-gray6Xl after:bg-gray6Xl before:bg-transparemt text-[40px] md:text-[69px]' : 'text-mediumPrimary after:bg-blue before:bg-blue text-[40px] md:text-[89px] '}  
    after:content-[''] after:h-[18px] after:w-[18px] md:after:h-[32px] md:after:w-[32px] after:block after:rounded-full after:absolute after:-right-[30px] sm:after:-right-[50px] md:after:-right-[60px] after:top-2/4 after:-translate-y-2/4 
    before:content-[''] before:h-[18px] before:w-[18px] md:before:h-[32px] md:before:w-[32px] before:block before:rounded-full before:absolute before:right-[140px] before:top-2/4 before:-translate-y-2/4`}>0{idx + 1} </span>
                    </p>
                </div>

            </div>
            <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 max-w-[240px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] text-mediumPrimary absolute w-max -top-[2px] md:-top-[225px] -left-[108px] sm:left-[97%] md:left-[102%]`}>
                <h3 className={`${mulish.className} text-[18px] md:text-[40px] font-extrabold mb-[16px] text-left`}>{title}</h3>
                <p className={`${mulish.className}  text-[14px] md:text-[15px] text-left font-normal max-w-full xs:max-w-[260px] leading-[26px] tracking-[0.3px] mb-[20px]`}>{description}</p>
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
                        className="max-h-[295px] "
                        src={`${image}full.webp`}
                        alt={title}
                    />
                </picture>
            </div>
        </>



    )
}

export default CardHowItWorksV2;
