import React from 'react';
import { createElement } from 'react';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap"
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
        <div className={`container ${exo2.className} ${classContainer} relative text-center`}>
            {
                createElement(tagNames[tag] || 'p',
                    {
                        className: `relative font-bold text-center text-darkPrimary opacity-[3%] text-title uppercase relative ${classTitle || ''} `
                    },
                    content.title,
                )

            }
            {content.subTitle && <p data-wow-duration="1s" className={`${classSubTitle || ''} ${exo2.className} wow fadeIn -mt-[8%] sm:-mt-[6%] opacity-100 text-subTitle text-mediumPrimary font-bold`}>{content.subTitle}</p>}
        </div>
    );
}

export default Title;

const MemoizedTitle = React.memo(Title);
export { MemoizedTitle };