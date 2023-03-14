import { useEffect, useRef, useState } from "react";

function useOnScreen(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state when the observer detects the target element
                setIntersecting(entry.isIntersecting);
            },
            {
                threshold: 0.5 // Trigger the observer when the target is 50% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.unobserve(ref.current);
        };
    }, [ref]);

    return isIntersecting;
}

function Loading() {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <div className="h-2 relative max-w-lg rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute"></div>
            <div
                ref={ref}
                className={`h-full bg-gray-400 absolute duration-1000 transition-transform ${isVisible ? `w-[${'50%'}]` : "w-0"
                    }`}
                style={{ transform: "translateX(-100%)" }}
            ></div>
        </div>
    );
}

export default Loading;
