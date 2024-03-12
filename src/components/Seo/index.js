import { NextSeo } from "next-seo";

const Seo = ({ seo }) => {
    const { title, description, keywords } = seo;
    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                title: title,
                description: description,
                images: [
                    {
                        url: 'assets/img/quiz_main.webp',
                        width: 700,
                        height: 419,
                        alt: 'Codevery Quiz plugin',
                    }
                ],
                site_name: title,
            }}
            robotsProps={{
                noindex: false,
                nofollow: false,
            }}
            noindex={true}
            nofollow={true}
            additionalMetaTags={[
                {
                    name: 'keywords',
                    content: keywords,
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
            ]}
        />
    );
}

export default Seo;