import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "@/components/Title";
import Slide from "@/components/Slide";
import { TestimonialsContainer } from "./style";
const Testimonials = ({ content, font }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: "0px",
        centerMode: true,
    };
    return (
        <>
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-[36px] md:mb-[64px]" />
            <TestimonialsContainer>
                <Slider {...settings}>
                    {content.reviews && content.reviews.map((item, index) => (
                        <Slide key={index} slide={item} font={font} />
                    ))}
                </Slider>
            </TestimonialsContainer>
        </>
    );
}

export default Testimonials;