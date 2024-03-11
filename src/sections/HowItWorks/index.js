import { useEffect, useRef } from "react";

import CardHowItWorks from "@/components/CardHowItWorks";
import CardHowItWorksV2 from "@/components/CardHowItWorksV2";
import Title from "@/components/Title";

const HowItWorks = ({ content, fonts }) => {
    const refTarget = useRef(null);
    const fixedSection = useRef(null);
    const afterCircleDased = `after:content-[''] after:absolute after:z-[-1] after:border-r-2 after:border-dashed after:border-gray6Xl after:h-[800px] after:sm:h-full after:w-full after:rounded-full after:top-2/4 after:-translate-x-2/4 after:-translate-y-2/4 after:-left-[41%] after:sm:-left-[34%] after:lg:-left-[14%]`
    const beforeCircleDased = `before:content-[''] before:absolute before:border-r-2 before:border-dashed before:border-gray6Xl before:h-[60%] before:w-[60%] before:rounded-full before:top-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-left-[34%] before:lg:-left-[14%]`
    return (
        <div ref={fixedSection} id="how_it_works" className="bg-gray3Xl pt-[24px] md:pt-[70px] pb-0 md:pb-10">
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-0 md:-mb-[60px] z-10" />
            <div className="h-[140ch] sm:h-[200ch]">
                <div className="sticky top-[150px] sm:top-0 max-w-[1100px] mx-auto overflow-hidden md:overflow-visible after:content-[''] after:absolute after:top-0 after:w-full after:h-20 after:sm:h-60 after:bg-gray-gradient">
                    <div className={`relative -top-[220px] md:top-0 w-[800px] sm:w-[1000px] h-[700px] sm:h-[1000px] ${afterCircleDased} ${beforeCircleDased}`}>
                        <div ref={refTarget} className="target absolute w-16 sm:w-24 h-16 sm:h-24 left-[25%] lg:left-[45%] -translate-x-2/4 top-2/4 -translate-y-2/4">
                            {content.items.map((card, idx) =>
                                <CardHowItWorksV2 key={idx} cardContent={card} idx={idx} refContainer={refTarget.current} fixedSection={fixedSection} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;