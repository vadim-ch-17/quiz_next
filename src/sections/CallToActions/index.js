import ResponsiveImage from "@/components/ResponsiveImage";
import ButtonsContainer from "@/components/ButtonsContainer";

const CallToActions = ({ content, img, font }) => {
    return (
        <div className="bg-lightPrimary py-[38px]">
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center msax-w-[545px]">
                    <p className={`${font.className} text-white text-[25px] md:text-[45px] mb-[29px] md:mb-[68px] text-center lg:text-left`}>{content.title}</p>
                    <ButtonsContainer classContainer="justify-center lg:justify-start " btnDownload="pink" btnDemo="white" />
                </div>

                <div className="flex justify-center">
                    <ResponsiveImage
                        src={`${content.image}_${img}.webp`}
                        alt={content.alt}
                        classes="max-h-[440px]"
                    />
                </div>
            </div>
        </div>

    );
}

export default CallToActions;