import ButtonsContainer from "@/components/ButtonsContainer";
import ResponsiveImage from "@/components/ResponsiveImage";

const Banner = ({ content }) => {
    const { title, subTitle, image } = content;

    return (
        <>
            <div id="banner" className="bg-darkPrimary pb-[55px] md:pb-[125px] pt-[30px] px-[15px]">
                <div className=" max-w-[1274px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_1fr]">
                    <div className="text-white flex flex-col justify-center " >
                        <div className="relative">
                            <h1 className={`font-exo2 text-[50px] md:text-[70px] lg:text-[90px] font-bold tracking-[0.3px] uppercase mb-[14px] pr-[50px] leading-[55px] md:leading-[100px]`} dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <ResponsiveImage
                                src="/assets/img/hand.webp"
                                alt={"Hand"}
                                height={70}
                                width={50}
                                classes=" max-h-[70px] absolute absolutre bottom-[30px] right-[30%] hidden lg:block"
                            />
                        </div>

                        <p className={` font-mulish text-[15px] font-semibold mb-[25px] md:mb-[49px] tracking-[0.3px] leading-[28px] max-w-[490px]`}>{subTitle}</p>
                        <ButtonsContainer classContainer="justify-center lg:justify-start" btnDownload="pink" btnDemo="blue" />
                    </div>

                    <div className="flex justify-center">
                        <picture>
                            <source
                                media="(max-width: 700px)"
                                srcSet={`${image}500.webp`}
                            />
                            <source
                                media="(max-width: 1000px)"
                                srcSet={`${image}900.webp`}
                            />
                            <img
                                className="max-h-[700px] "
                                src={`${image}900.webp`}
                                alt={'Quiz plugin for WordPress'}
                                loading="eager"
                                height={700}
                                width={625}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner;