import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (options) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
    const [root, setRoot] = useState(null);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        if (!ref.current || !root) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            setCurrent(entry.target.dataset.active);
        }, { ...options, root });

        observer.observe(ref.current);

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, root, options]);

    return [ref, isIntersecting, setRoot, current];
};

export default useIntersectionObserver;