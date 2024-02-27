import { Mulish } from "next/font/google";
import ResponsiveImage from "../ResponsiveImage";
import useIntersectionObserver from "@/hooks/intersection-observer";
import { useRef, useEffect } from "react";
const mulish = Mulish({
    weight: ["400", "600", "700", "800", "900"],
    subsets: ["latin"]
});

const CardHowItWorks = ({ cardContent, idx, refContainer }) => {
    const [ref, inView, setRoot] = useIntersectionObserver({
        root: refContainer,
        rootMargin: '-30px 0px -30px 0px',
    })

    const { title, description, image } = cardContent;
    const rotatePisition = ['rotate-[0deg]', 'rotate-[18deg] sm:rotate-[20deg] md:rotate-[30deg]', 'rotate-[38deg] sm:rotate-[40deg] md:rotate-[60deg]', 'rotate-[58deg] sm:rotate-[60deg] md:rotate-[90deg]', 'rotate-[78deg] sm:rotate-[80deg] md:rotate-[120deg]', 'rotate-[130deg] md:rotate-[150deg]']
    // const rotatePisition = ['rotate-[0deg]', 'rotate-[30deg]', 'rotate-[60deg]', 'rotate-[90deg]', 'rotate-[120deg]', 'rotate-[130deg] md:rotate-[150deg]']

    useEffect(() => {
        const rootElement = document.querySelector('.target');
        setRoot(rootElement);
    }, [])

    return (
        <div ref={ref} className={`item h-[46px] sm:h-[100px] w-[1092px] sm:w-[1090px] pr-[160px] sm:pr-[87px] md:pr-[90px] text-right absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 ${rotatePisition[idx]}`}>
            <p className="relative top-2/4 -translate-y-2/4 right-0">
                <span className={`${mulish.className} ${!inView ? 'text-darkGrey after:bg-darkGrey before:bg-transparemt' : 'text-mediumPrimary after:bg-blue before:bg-blue'} text-[40px] md:text-[89px] 
                after:content-[''] after:h-[18px] after:w-[18px] md:after:h-[32px] md:after:w-[32px] after:block after:rounded-full after:absolute after:-right-[30px] sm:after:-right-[50px] md:after:-right-[60px] after:top-2/4 after:-translate-y-2/4 
                before:content-[''] before:h-[18px] before:w-[18px] md:before:h-[32px] md:before:w-[32px] before:block before:rounded-full before:absolute before:right-[140px] before:top-2/4 before:-translate-y-2/4`}>0{idx + 1} </span>
            </p>
            <div className={`${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 max-w-[240px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[500px] text-mediumPrimary absolute w-max top-[8px] md:-top-[225px] left-[89.5%] sm:left-[97%] md:left-[102%]`}>
                <h3 className={`${mulish.className} text-[18px] md:text-[40px] font-extrabold mb-[16px] text-left`}>{title}</h3>
                <p className={`${mulish.className}  text-[14px] md:text-[15px] text-left font-normal max-w-full xs:max-w-[260px] leading-[26px] tracking-[0.3px] mb-[20px]`}>{description}</p>
                <ResponsiveImage
                    src={image}
                    alt={"Card"}
                    classes=" max-h-[295px]"
                />
            </div>
        </div>

    )
}

export default CardHowItWorks;
