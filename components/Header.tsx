import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
    return (
        <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between bg-inherit p-5 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/joshua-garcia-10b10b10b/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/joshua-garcia-10b10b10b/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/joshua-garcia-10b10b10b/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/joshua-garcia-10b10b10b/"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex cursor-pointer flex-row items-center"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
                    Get in Touch
                </p>
            </motion.div>
        </header>
    );
}

export default Header;
