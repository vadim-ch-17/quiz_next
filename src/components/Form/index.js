import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createFormElement, sendEmail, validationForm } from "./componentUtils";
import { useLandingContext } from "@/utils/landing-context";
import Loader from "../Loader";
import Button from "../Button";
const Form = ({ inputs, font }) => {
    const { setIsOpenModal, setModalBody, setLoader } = useLandingContext();
    const { register, watch, reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validationForm(inputs)) });

    const onSubmit = data => {
        setLoader(true)
        reset();
        sendEmail(data).then(res => {
            if (res.status === 200) {
                // setIsOpenModal(false);
                // setIsOpenModal(true);
                setLoader(false)
                // setModalBody("SendSuccess");
            } else {
                alert("Something went wrong!");
            }
        })
    };


    return (
        <>
            <div className="form relative container !max-w-[568px] mx-auto">
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} className={font.className}>
                        {inputs.length && inputs.map((input, idx) =>
                            input.type === 'submit' ? (
                                <Button key={idx} as="button" type={input.type} label={"Submit form"} classes={`${Object.keys(errors).length === 0 ? 'hover:cursor-pointer hover:bg-white hover:text-visited' : 'opacity-25 pointer-events-none'} w-full mt-[25px] md:mt-[35px]`}>{input.value}</Button>
                            ) : (

                                <div className={`w-full relative ${idx !== 2 && 'mb-[25px]'} `} key={idx}>
                                    {createFormElement({ input, classes: ` form-inputs peer w-full rounded-[30px] bg-white border-[1px] ${errors[input.name] ? 'border-red-800 visited:border-red-800 focus:border-red-800' : 'border-[#adb5cd] visited:border-visited focus:border-visited'}  py-[0.875rem] px-[21px] font-medium text-[0.875rem]  focus:outline-none`, idx, register: { ...register(input?.name) } })}
                                    <label htmlFor={input.name} className={` form-label z-z4 ${watch(input.name) && watch(input.name).length ? 'animate-[topLabel_0.3s_ease-in-out_forwards] after:bg-white' : ''} peer-focus:animate-[topLabel_0.3s_ease-in-out_forwards] duration-500 absolute left-[1.5rem] pt-4 text-[#949cb6] pointer-events-none text-[0.875rem] after:content-[''] after:absolute after:left-1/2 after:-translate-x-2/4 after:bottom-0 after:w-[110%] after:h-[25%] peer-focus:after:bg-white after:z-under`}>{input.label}</label>
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