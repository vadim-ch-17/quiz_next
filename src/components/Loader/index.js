import { useLandingContext } from "@/utils/landing-context";
import { LoaderContainer } from "./style";
const Loader = () => {
    const { loader } = useLandingContext();

    return (
        <div className={`absolute  z-100 top-0 left-0 bottom-0 right-0 bg-white/45 ${loader ? 'visible' : 'invisible'}`}>
            <LoaderContainer>
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className={`dot dot${idx + 1} w-[10px] h-[10px] bg-darkPrimary rounded-full absolute top-2/4`}></div>
                ))}
            </LoaderContainer>
        </div>
    );
}

export default Loader;
