import { motion, Variants } from "framer-motion";

interface LoadingProps {
    className?: string;
    color?: string;
}

const outerCircleVariants: Variants = {
    animate: {
        rotate: 360,
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

const innerCircleVariants: Variants = {
    animate: {
        rotate: [-360, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

const Loading: React.FC<LoadingProps> = ({ className, color = "grey" }) => {
    return (
        <motion.div
            className={className}
            variants={outerCircleVariants}
            animate="animate"
            style={{ width: "50px", height: "50px" }}
        >
            <motion.svg
                viewBox="0 0 50 50"
                style={{ width: "100%", height: "100%" }}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <motion.circle
                    cx="25"
                    cy="25"
                    r="20"
                    variants={innerCircleVariants}
                    animate="animate"
                    style={{ transformOrigin: "center", position: "absolute" }}
                />
                <circle cx="25" cy="25" r="20" />
            </motion.svg>
        </motion.div>
    );
};

export default Loading;
