import ResponsiveImage from "../ResponsiveImage";

const Card = ({ card, idx }) => {
    const { title, description, image } = card;
    // const { mulish, exo2 } = font;

    return (
        <div data-wow-delay={`0.${2 + idx}s`} className={`wow fadeIn w-[368px] min-h-[340px] text-mediumPrimary bg-white rounded-[40px] shadow-card pt-[20px] pl-[36px] pr-[33px] pb-[68px]`}>
            <ResponsiveImage
                src={image}
                alt={"Card"}
                height={74}
                width={74}
                classes="w-[74px] h-[74px] mx-auto mb-[14px]"
            />
            <h3 className={` font-exo2 text-xl text-center mb-[16px] font-bold`}>{title}</h3>
            <p className={` font-mulish text-[15px] font-normal max-w-full xs:max-w-[260px] leading-[26px] tracking-[0.3px]`}>{description}</p>
        </div>
    );
}

export default Card;
