import Card from "@/components/Card";
import Title from "@/components/Title";

const Features = ({ content, font }) => {
    // console.log(content);
    return (
        <div id="features" className="pb-[72px] md:pb-[136px] pt-[24px] md:pt-[70px] bg-gray4Xl">
            <div className="container">
                <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-[36px] md:mb-[64px]" />
                <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[25px] md:gap-y-[39px]">
                    {content.items && content.items.map((card, index) => <Card key={index} card={card} font={font} idx={index} />)}
                </div>
            </div>
        </div>
    );
}

export default Features;