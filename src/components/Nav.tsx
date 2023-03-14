import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        closed: {
            opacity: 0,
            y: "-100%",
        },
    };

    const menuItemVariants = {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -20,
        },
    };

    return (
        <nav className="bg-gray-800 py-2 fixed top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Link href='/' className="flex gap-1">
                    <img className="h-8" src="/i-gpt_white.png" alt="Logo" />
                    <span className="text-gray-200 mt-1 font-bold">i-GPT</span>
                </Link>
                <div className="hidden md:block">
                    <motion.ul
                        className="flex space-x-4 text-white uppercase text-sm font-medium"
                        variants={menuVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                    >
                        <motion.li variants={menuItemVariants}>
                            <Link href="#">Home</Link>
                        </motion.li>
                        <motion.li variants={menuItemVariants}>
                            <Link href="#">About</Link>
                        </motion.li>
                        <motion.li variants={menuItemVariants}>
                            <Link href="#">Contact</Link>
                        </motion.li>
                    </motion.ul>
                </div>
                <div className="md:hidden">
                    <div className="flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <motion.ul
                    className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                    variants={menuVariants}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                >
                    <motion.li variants={menuItemVariants}>
                        <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">
                            Home
                        </Link>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                        <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">
                            About
                        </Link>
                    </motion.li>
                    <motion.li variants={menuItemVariants}>
                        <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">
                            Contact
                        </Link>
                    </motion.li>
                </motion.ul>
            </div>
        </nav>
    );
};