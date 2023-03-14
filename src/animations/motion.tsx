import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MotionProps } from "./variants";

function Motion({ variant, className, children }: MotionProps) {
    const [ref, inView] = useInView({
        threshold: 0.3, // Trigger animation when component is 50% visible
        triggerOnce: false, // Only trigger animation once
    });

    return (
        <motion.div
            ref={ref}
            className={`${className} transition-all duration-300`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variant}
            transition={{ duration: 1, delayChildren: 0.2, ease:"easeInOut", velocity: 0.1 }}
        >
            {children}
        </motion.div>
    );
}

export default Motion;
