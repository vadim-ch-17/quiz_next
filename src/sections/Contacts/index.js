import Form from "@/components/Form";
import Loader from "@/components/Loader";
import Title from "@/components/Title";
const Contacts = ({ content, font }) => {
    const { form } = content;

    return (
        <div id="contacts" className="relative pb-[72px] md:pb-[115px] pt-[24px] md:pt-[70px] bg-gray4Xl">
            <Title content={{ title: content.title, subTitle: content.subTitle }} tag="h2" classContainer="mb-[36px] md:mb-[64px]" />
            <Form inputs={form.inputs} font={font} />
            <Loader />
        </div>
    );
}

export default Contacts;