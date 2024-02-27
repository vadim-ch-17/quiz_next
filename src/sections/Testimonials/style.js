import styled from "styled-components";
import theme from "@/styles/theme";

export const TestimonialsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    // padding: 0 15px;
    .swiper-wrapper {
        padding: 70px 0;
    }
   
    .swiper-slide.swiper-slide-active {
        position: relative;
        z-index: 10;
        transform: scale(1.2);
        transition: all 0.3s ease;
        .slide{
            margin: 0px 20px;
        }
        .qq{
            filter: invert(65%) sepia(84%) saturate(5216%) hue-rotate(249deg) brightness(101%) contrast(82%);
            opacity: 0.9;
        }
    }
    .swiper-slide.swiper-slide-prev{
        .slide{
            margin-right: 0px;
        }
    }
    .swiper-slide.swiper-slide-next{
        .slide{
            margin-left: 0px;
        }
    }
    .swiper-button-disabled{
        cursor: not-allowed;
        pointer-events: none;
        background-color: ${theme.colors.grayXl};
    }
    .swiper-pagination {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0 0 0;
        opacity: 1!important;
    }
    .swiper-pagination-bullet {
        height: 16px;
        width: 16px;
        background-color: ${theme.colors.grayXl};
        opacity: 1!important;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: ${theme.colors.blue};
        height: 26px;
        width: 26px;
    }
    @media (max-width: 767px) {
        .swiper-wrapper {
            padding: 35px 0 70px 20px;
        }
        .swiper-slide.swiper-slide-active {
            transform: scale(1);
            .slide{
                margin: 0px;
            }
        }
        
    }
`;