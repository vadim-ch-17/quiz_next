import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import Head from "next/head";
import ButtonsContainer from "@/components/ButtonsContainer";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useEffect, useState } from "react";
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const Banner = ({ content, fonts }) => {
    const { mulish, exo2 } = fonts;
    const { title, subTitle, image } = content;
    const imageUrlBig = `${image}900.webp`
    const imageUrlSmall = `${image}500.webp`



    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })

    let imageSrc = `${image}900.webp`
    if (isMobile) {
        imageSrc = `${image}500.webp`
    } else if (isTablet) {
        imageSrc = `${image}900.webp`
    }

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href={imageSrc}
                    as="image"
                />
                <link
                    rel="preload"
                    href={imageSrc}
                    as="image"
                />
            </Head>
            <div id="banner" className="bg-darkPrimary pb-[55px] md:pb-[125px] pt-[30px] px-[15px]">
                <div className=" max-w-[1274px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_1fr]">
                    <div className="text-white flex flex-col justify-center " >
                        <div className="relative">
                            <h1 className={` ${exo2.className} text-[50px] md:text-[70px] lg:text-[90px] font-bold tracking-[0.3px] uppercase mb-[14px] pr-[50px] leading-[55px] md:leading-[100px]`} dangerouslySetInnerHTML={{ __html: title }}></h1>
                            <ResponsiveImage
                                src="/assets/img/hand.webp"
                                alt={"Hand"}
                                classes=" max-h-[70px] absolute absolutre bottom-[30px] right-[20%] hidden lg:block"
                            />
                        </div>

                        <p className={` ${mulish.className} text-[15px] font-semibold mb-[25px] md:mb-[49px] tracking-[0.3px] leading-[28px] max-w-[490px]`}>{subTitle}</p>
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
                                className="lazyload max-h-[700px] "
                                src={imageSrc}
                                alt={'Quiz plugin for WordPress'}
                                loading="lazy"
                            />
                        </picture>
                        {/* <img
                            data-sizes="auto"
                            data-src={imageUrl}
                            data-srcset={` ${image}500.webp 900w, ${imageUrl} 1000w`} class="lazyload min-h-[700px]" /> */}
                        {/* <img
                            data-sizes="(min-width: 700px) 700px, 100vw"
                            data-src={imageUrlBig}
                            data-srcset={`${imageUrlSmall} 500w, ${imageUrlBig} 1000w`}
                            className="lazyload w-auto md:w-[700px] lg:w-full h-fit max-h-[700px]"
                            alt="Quiz plugin for WordPress"
                            loading="lazy"
                        /> */}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Banner;