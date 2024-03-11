import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
    const [root, setRoot] = useState(null);
    const [current, setCurrent] = useState(null);
    const [intersectingElement, setIntersectingElement] = useState(null);

    useEffect(() => {
        if (!ref.current || !root) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (entry.isIntersecting) {
                setCurrent(entry.target);
                setIntersectingElement(entry.target);

            }
        }, { ...options, root });
        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, root, options]);

    return [ref, isIntersecting, setRoot, current, intersectingElement];
};

export default useIntersectionObserver;