import { useLandingContext } from "@/utils/landing-context";

const Modal = ({ children }) => {
    const { isOpenModal, setIsOpenModal } = useLandingContext();
    return (
        <div
            id="sendMessage"
            className={`send popup z-100 ${isOpenModal ? "visible opacity-100 " : "invisible z-under opacity-0"}  fixed left-0 top-0 h-full w-full transition-all duration-500`}
        >
            <div
                className="overlay fixed left-0 top-0 z-40 h-full  w-full bg-black opacity-50"
                onClick={() => setIsOpenModal(false)}
            ></div>
            <div
                className={`body ${isOpenModal ? "visible -translate-x-2/4 -translate-y-2/4 opacity-100 " : "invisible -translate-x-2/4 -translate-y-1/3 opacity-0 "} absolute-center px-3 z-100 absolute left-2/4 top-2/4 mx-auto w-full max-w-[900px]  transition-all duration-500 `}
            >
                <div className="content rounded-[30px] bg-darkPrimary text-white shadow-3xl">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;