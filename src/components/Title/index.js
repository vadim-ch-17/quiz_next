import { createElement } from 'react';
import { Days_One } from 'next/font/google';

const daysOne = Days_One({
    weight: ["400"],
    subsets: ["latin"]
});

const Title = ({ content, tag, classContainer, classTitle, classSubTitle }) => {
    const tagNames = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
    };
    return (
        <div className={`container ${classContainer} relative text-center`}>
            {
                createElement(tagNames[tag] || 'p',
                    { className: `${daysOne.className} text-center text-darkPrimary opacity-[3%] text-title uppercase relative ${classTitle || ''}` },
                    content.title
                )

            }
            {content.subTitle && <p data-wow-duration="1s" className={`${classSubTitle || ''} ${daysOne.className} wow fadeIn -mt-[8%] sm:-mt-[6%] opacity-100 text-subTitle font-dayOne text-mediumPrimary font-extrabold`}>{content.subTitle}</p>}
        </div>
    );
}

export default Title;