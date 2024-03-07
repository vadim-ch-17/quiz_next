import styled from "styled-components";
import theme from "@/styles/theme";

export const TestimonialsContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    .swiper-wrapper {
        padding: 70px 0;
    }
   .swiper-slide {
    .slide{
        transform: scale(0.4);
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
   }
    .swiper-slide.swiper-slide-active {
        position: relative;
        z-index: 10;
        .slide{
            opacity: 1;
            transform: scale(1.2);
            margin: 0px 20px;
            box-shadow: 10px 10px 30px 0px ${theme.colors.mediumPrimary};
            transition: all 0.3s ease-in-out;
        }
        .qq{
            filter: invert(65%) sepia(84%) saturate(5216%) hue-rotate(249deg) brightness(101%) contrast(82%);
            opacity: 0.9;
        }
    }
    .swiper-slide.swiper-slide-prev{
        .slide{
            opacity: 1;
            transform: scale(1);
            margin-right: 0px;
            box-shadow: 10px 10px 30px 0px ${theme.colors.mediumPrimary};
            transition: all 0.3s ease-in-out;
        }
    }
    .swiper-slide.swiper-slide-next{
        .slide{
            opacity: 1;
            transform: scale(1);
            margin-left: 0px;
            box-shadow: 10px 10px 30px 0px ${theme.colors.mediumPrimary};
            transition: all 0.3s ease-in-out;
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
        margin: 0 15px!important;
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
            
            .slide{
                transform: scale(1);
                margin: 0px;
            }
        }
        
    }
`;