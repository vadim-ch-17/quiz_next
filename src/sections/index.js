import Title from "@/components/Title";
import CallToActions from "./CallToActions";

const Sections = ({ sections, font }) => {
    return (
        <>
            <Title content={{ title: 'ewgewghewh' }} tag="h1" />
            <CallToActions content={sections.callToActions} img={"top"} font={font.daysOne} />
            <h1>test</h1>
            <CallToActions content={sections.callToActions} img={"bottom"} font={font.daysOne} />
        </>
    );
}

export default Sections;