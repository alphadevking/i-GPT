import { Variants } from 'framer-motion';
import { GlobalTypes } from './../globals/index';

export interface MotionProps extends GlobalTypes {
    variant?: Variants;
}

export const variants = {
    fadeInView: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeInFromDown: {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    },
    fadeInFromUp: {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    },
    fadeInFromLeft: {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    fadeInFromRight: {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    slideInFromLeft: {
        hidden: { x: -100 },
        visible: { x: 0 },
    },
    slideInFromRight: {
        hidden: { x: 100 },
        visible: { x: 0 },
    },
}