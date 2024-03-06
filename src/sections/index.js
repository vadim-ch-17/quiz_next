import CallToActions from "./CallToActions";
import Features from "./Features";
import Contacts from "./Contacts";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";

const Sections = ({ sections, font }) => {

    return (
        <>
            <Banner content={sections.banner} fonts={font} />
            <Features content={sections.features} font={font} />
            <CallToActions content={sections.callToActions} img={"top"} font={font.exo2} />
            <HowItWorks content={sections.howItWorks} fonts={font} />
            <Testimonials content={sections.testimonials} font={font.mulish} />
            <CallToActions content={sections.callToActions} img={"bottom"} font={font.exo2} />
            <Contacts content={sections.contacts} font={font.mulish} />
        </>
    );
}

export default Sections;