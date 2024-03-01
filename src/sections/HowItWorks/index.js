import { useEffect, useRef } from "react";

import CardHowItWorks from "@/components/CardHowItWorks";
import CardHowItWorksV2 from "@/components/CardHowItWorksV2";
import Title from "@/components/Title";
import { useLandingContext } from "@/utils/landing-context";

const HowItWorks = ({ content, fonts }) => {
    const refTarget = useRef(null);
    const fixedSection = useRef(null);
    const slideContainer = useRef(null);
    const { slide, setSlide } = useLandingContext();


    return (
        <div ref={fixedSection} id="how_it_works" className="bg-gray3Xl pb-[72px] md:pb-[136px] pt-[24px] md:pt-[70px]">
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-0 md:-mb-[60px] z-10" />
            <div className="h-[70ch] md:h-[165ch] lg:h-[170ch] relative">
                <div className="sticky top-[150px] sm:top-0 max-w-[1100px] mx-auto overflow-hidden">

                    <div className="relative -top-[310px] md:top-0 w-[800px] sm:w-[1000px] h-[1000px]">
                        <div className={`w-[900px] lg:w-[300px] h-[300px] rotate-0 sm:rotate-[360deg] absolute  sm:left-0 top-[9.5rem] md:-top-[3.5rem] sm:-top-[25px] bg-gray-gradient z-10`}></div>
                        <div className={`w-[300px] lg:w-[500px] h-[400px] rotate-[219deg] lg:rotate-[272deg] absolute -left-1/4 bottom-0 bg-gray-gradient z-10`}></div>
                        <div
                            className="absolute border-2 border-dashed border-gray6Xl h-[800px] sm:h-full w-full rounded-full top-2/4 -translate-x-2/4 -translate-y-2/4 -left-[41%] sm:-left-[34%] lg:-left-[14%]">
                        </div>
                        <div
                            className="absolute border-2 border-dashed border-gray6Xl h-[60%] w-[60%] rounded-full top-2/4 -translate-x-2/4 -translate-y-2/4 -left-[34%] lg:-left-[14%]">
                        </div>
                        <div className="absolute top-0 -left-[71%] sm:-left-[70%] lg:-left-2/4 h-full w-full">
                            <div ref={refTarget} className="target w-16 sm:w-24 h-16 sm:h-24 right-0 top-2/4 -translate-y-2/4 absolute">
                                {content.items.map((card, idx) =>
                                    <CardHowItWorksV2 key={idx} cardContent={card} idx={idx} refContainer={refTarget.current} fixedSection={fixedSection} setSlide={setSlide} slide={slide} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HowItWorks;