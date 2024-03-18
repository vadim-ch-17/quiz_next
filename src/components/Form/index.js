import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createFormElement, sendEmail, validationForm } from "./componentUtils";
import { useLandingContext } from "@/utils/landing-context";
import Button from "../Button";
import theme from "@/styles/theme";

const Form = ({ inputs }) => {
    const { setIsOpenModal, setModalContent, setLoader } = useLandingContext();
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationForm(inputs)) });

    const onSubmit = data => {
        setLoader(true)
        reset();
        sendEmail(data).then(res => {
            if (res.status === 200) {
                setIsOpenModal(false);
                setIsOpenModal(true);
                setLoader(false)
                setModalContent("SendSuccess");
            } else {
                alert("Something went wrong!");
            }
        })
    };


    return (
        <>
            <div className="form relative container !max-w-[568px] mx-auto">
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} className={`font-medium`}>
                        {inputs.length && inputs.map((input, idx) =>
                            input.type === 'submit' ? (
                                <Button data-wow-duration="0.6s" key={idx} as="button" type={'blue'} label={"Submit form"} classes={`wow fadeIn ${Object.keys(errors).length === 0 ? 'hover:cursor-pointer hover:bg-white hover:text-visited' : 'opacity-25 pointer-events-none'} w-full mt-[25px] md:mt-[35px]`}>{input.value}</Button>
                            ) : (

                                <div data-wow-duration={`0.${2 + idx}s`} className={`wow fadeIn w-full relative ${idx !== 2 && 'mb-[25px]'} `} key={idx}>
                                    {createFormElement({ input, classes: ` form-inputs peer w-full rounded-[30px] bg-white border-[1px] ${errors[input.name] ? 'border-red-800 visited:border-red-800 focus:border-red-800' : `border-[${theme.colors.gray3Xl}] visited:border-visited focus:border-visited`}  py-[0.875rem] px-[21px] font-medium text-[0.875rem]  focus:outline-none`, idx, register: { ...register(input?.name) } })}
                                    <label htmlFor={input.name} className={` form-label z-z4 ${watch(input.name) && watch(input.name).length ? 'animate-[topLabel_0.3s_ease-in-out_forwards] after:bg-white' : ''} peer-focus:animate-[topLabel_0.3s_ease-in-out_forwards] duration-500 absolute left-[1.5rem] pt-4 text-gray5Xl pointer-events-none text-[0.875rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-2/4 after:bottom-0 after:w-[110%] after:h-[25%] peer-focus:after:bg-white after:z-under`}>{input.label}</label>
                                    {errors[input.name] && <span role="alert" className="text-red-800 text-sm">{errors[input.name]?.message || 'Error'}</span>}
                                </div>
                            )
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;