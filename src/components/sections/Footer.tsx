import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const date_now = new Date()
    const currentYear = date_now.getFullYear()
    
    return (
        <div className="py-2 absolute bottom-0 w-full px-5">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 grid justify-center">
                <div className="grid grid-flow-col w-fit mx-auto space-x-4">
                    <Link href="https://twitter.com/alpha_devking" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-700 hover:text-blue-600 cursor-pointer" size={24} />
                    </Link>
                    <Link href="https://github.com/alphadevking/i-GPT" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-700 hover:text-gray-500 cursor-pointer" size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/favour-orukpe-31432725b" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-cyan-700 hover:text-cyan-600 cursor-pointer" size={24} />
                    </Link>
                </div>
                <p className="opacity-50 text-sm text-center py-2">Copyright © {currentYear} | <b>i-GPT</b></p>
            </div>
        </div>
    );
};

export default Footer;
