import ResponsiveImage from "@/components/ResponsiveImage";
import ButtonsContainer from "@/components/ButtonsContainer";

const CallToActions = ({ content, img, font }) => {
    return (
        <div className="bg-lightPrimary py-[38px]">
            <div className="container grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center msax-w-[545px]">
                    <p className={`wow fadeIn ${font.className} text-white text-[25px] md:text-[50px] font-bold mb-[29px] md:mb-[68px] text-center lg:text-left`} data-wow-duration="0.2s">{content.title}</p>
                    <ButtonsContainer classContainer="wow fadeIn justify-center lg:justify-start " btnDownload="pink" btnDemo="white" data-wow-duration="0.4s" />
                </div>

                <div className="flex justify-center">
                    <ResponsiveImage
                        src={`${content.image}_${img}.webp`}
                        alt={content.title}
                        classes="max-h-[440px] wow fadeIn"
                        data-wow-duration="0.6s"
                    />
                </div>
            </div>
        </div>

    );
}

export default CallToActions;