import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toJpeg } from "html-to-image";
import Button from "../Button";
import ResponsiveImage from "../ResponsiveImage";

const CertificateQuiz = ({ content }) => {
    const { register, handleSubmit } = useForm();
    const certificateRef = useRef(null);

    const submitForm = (data) => {

        toJpeg(certificateRef.current, { quality: 0.95 })
            .then(function (dataUrl) {

                fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: 'Your Name',
                        emailTo: data.email,
                        message: 'Here is your certificate',
                        image: dataUrl,
                    }),
                })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            });
    }
    return (
        <div className="max-w-[600px] mx-auto ">
            <div ref={certificateRef} className={`shadow-certificete pt-[17px] pl-[20px] pb-[25px] pr-[40px] mb-2 flex justify-between overflow-hidden relative box-border min-h-[294px] rounded-[25px] bg-certificate`}>
                <div className="cquiz-certificate__column flex flex-col justify-between items-center text-center w-[47%]">
                    <div className="background-bow h-[140%] -top-[50px] rotate-[20deg] bottom-0 absolute right-[42%] after:w-5 after:absolute after:bg-pink after:h-[140%] after:-right-[9px] after:bottom-0 after:-top-[50px]"><div className="ribbon-bg"></div>
                        <div className="bow-bg h-[128px] w-[128px] absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10">
                            <ResponsiveImage
                                src="/assets/img/quiz/bow.svg"
                                alt={"Bow"}
                                type={"svg"}
                                height={128}
                                width={128}
                                crossOrigin="anonymous"
                                classes="mx-auto w-[100px] h-auto " />
                        </div>
                    </div>
                    <p className="cquiz-certificate__title uppercase text-4xl pt-1 text-darkPrimary font-bold">
                        Certificate
                    </p>
                    <div className="cquiz-certificate__promocode">
                        <p className="cquiz-certificate__promocode-title text-sm mb-[15px] uppercase font-bold">Promo code</p>
                        <p className=" px-[25px] py-[15px] uppercase rounded-[10px] bg-pink w-fit text-[30px] text-darkPrimary font-bold leading-none">PTTCQDHY</p>
                    </div>
                    <div className="cquiz-certificate__footer text-sm font-bold text-successDark underline">
                        <a href="https://quiz-mar.codevery.dev">quiz-mar.codevery.dev</a>
                    </div>
                </div>
                <div className="cquiz-certificate__column second w-[36%] flex flex-col justify-between">

                    <p className="cquiz-certificate__sale text-right text-pink uppercase font-bold pt-[14px] text-[30px]">Sale </p>
                    <div className="cquiz-certificate__sale-percent text-right text-pink font-bold text-[90px] tracking-[-5px]">
                        <p>10<span className="text-[53px]">%</span></p>
                    </div>
                    <div className="cquiz-certificate__expiration text-white w-fit ml-auto mr-[10%] pt-2 text-center text-sm font-bold">
                        <p><span className="cquiz-certificate__expiration-text uppercase">Valid until:</span><br /> <span className="cquiz-certificate__expiration-date">April 1, 2024</span></p>
                    </div>
                </div>
            </div>
            {content && content.message && <p className="text-sm font-semibold mb-[60px]">{content.message}</p>}
            <form onSubmit={handleSubmit(submitForm)}>
                <p className="mb-4">We can send you this coupon by email</p>
                <div className="flex">
                    <label htmlFor="sendEmail" className="w-full">

                        <input className=" border-[2px] border-grayXl h-full px-5 py-2 rounded-[33px] w-full max-w-[90%]" type="email" id="sendEmail" placeholder="Enter Email" {...register("email")} />
                    </label>
                    <Button type="submit" as={'button'} classes="!w-fit !min-w-[140px] !min-h-0 !px-[10px] shadow-2xl">Send</Button>
                </div>
            </form>
        </div>
    );
}

export default CertificateQuiz;