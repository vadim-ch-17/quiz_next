import CallToActions from "./CallToActions";
import Features from "./Features";
import Contacts from "./Contacts";
import Banner from "./Banner";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";

const Sections = ({ sections }) => {

    return (
        <>
            <Banner content={sections.banner} />
            <Features content={sections.features} />
            <CallToActions content={sections.callToActions} img={"top"} />
            <HowItWorks content={sections.howItWorks} />
            <Testimonials content={sections.testimonials} />
            <CallToActions content={sections.callToActions} img={"bottom"} />
            <Contacts content={sections.contacts} />
        </>
    );
}

export default Sections;