import ResponsiveImage from "../ResponsiveImage";

const Card = ({ card, font }) => {
    const { title, description, image } = card;
    const { daysOne, mulish } = font;

    return (
        <div className="w-[368px] min-h-[340px] text-mediumPrimary bg-white rounded-[40px] shadow-card pt-[20px] pl-[36px] pr-[33px] pb-[68px]">
            <ResponsiveImage
                src={image}
                alt={"Card"}
                classes="w-[74px] h-[74px] mx-auto mb-[14px]"
            />
            <h3 className={`${daysOne.className} text-lg text-center mb-[16px]`}>{title}</h3>
            <p className={`${mulish.className} text-[15px] font-normal max-w-full xs:max-w-[260px] leading-[26px] tracking-[0.3px]`}>{description}</p>
        </div>
    );
}

export default Card;
