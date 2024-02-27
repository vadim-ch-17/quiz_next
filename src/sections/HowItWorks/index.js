import { useEffect, useRef, useState } from "react";
import CardHowItWorks from "@/components/CardHowItWorks";
import Title from "@/components/Title";

const HowItWorks = ({ content, fonts }) => {
    const refTarget = useRef(null);
    const fixedSection = useRef(null);
    const slideContainer = useRef(null);
    const [scrollFull, setScrollFull] = useState(0);

    useEffect(() => {
        const speedRotate = (window.matchMedia("(min-width: 768px)").matches) ? 60 : 20;
        const rotateValue = (window.matchMedia("(min-width: 768px)").matches) ? 20 : 18;
        document.addEventListener('scroll', (e) => {

            const scroll = Math.round(
                (window.pageYOffset - fixedSection.current.offsetTop + 55) / 10,
            );

            const scrolled = (scroll * 100) / speedRotate;

            if (scrolled >= 20 && scrolled <= 140) {
                slideContainer.current.style.transform = `rotate(-${scrolled - rotateValue}deg)`;
                setScrollFull(scrolled);
            }
        })
    }, [])

    return (
        <div ref={fixedSection} id="how_it_works" className="bg-gray3Xl pb-[72px] md:pb-[136px] pt-[24px] md:pt-[70px]">
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-0 md:mb-[64px]" />
            <div className="h-[70ch] md:h-[140ch]  lg:h-[170ch] relative">
                <div className="sticky top-[150px] sm:top-[100px] max-w-[1100px] mx-auto overflow-hidden">

                    <div className="relative -top-[310px] md:top-0 w-[800px] sm:w-[1000px] h-[1000px]">
                        <div className={`${scrollFull < 110 ? 'block' : 'hidden'} w-[900px] lg:w-[1000px] h-[100px] rotate-0 sm:rotate-[272deg] absolute  sm:-left-2/4 top-[17.5rem] sm:-top-[20%] bg-gray-gradient z-10`}></div>
                        <div className={`${scrollFull > 110 ? 'block' : 'hidden'} w-[300px] lg:w-[500px] h-[400px] rotate-[206deg] lg:rotate-[272deg] absolute -left-1/4 bottom-0 bg-gray-gradient z-10`}></div>
                        <div
                            className="absolute border-2 border-dashed border-darkGrey h-[800px] sm:h-full w-full rounded-full top-2/4 -translate-x-2/4 -translate-y-2/4 -left-[41%] sm:-left-[34%] lg:-left-[14%]">
                        </div>
                        <div
                            className="absolute border-2 border-dashed border-darkGrey h-[60%] w-[60%] rounded-full top-2/4 -translate-x-2/4 -translate-y-2/4 -left-[34%] lg:-left-[14%]">
                        </div>
                        <div className="absolute top-0 -left-[71%] sm:-left-[70%] lg:-left-2/4 h-full w-full">
                            <div ref={refTarget} className="target w-5 sm:w-24 h-5 sm:h-24 right-0 top-2/4 -translate-y-2/4 absolute">
                                <div ref={slideContainer} className="slide-container h-full w-full absolute -left-[556px] sm:-left-[593px] rotate-0">
                                    {content.items.map((card, idx) =>
                                        <CardHowItWorks key={idx} cardContent={card} idx={idx} refContainer={refTarget.current} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;