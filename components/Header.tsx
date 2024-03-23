import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Social } from '../typings';

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    const handleContactMe = () => {
        window.location.href = `mailto:gabinwilliams@gmail.com`;
    };
    return (
        <header className='sticky top-0 z-20 mx-auto flex items-start justify-between bg-inherit p-5 xl:items-center'>
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
                className='flex flex-row items-center'
            >
                {Array.isArray(socials)
                    ? socials.map((social) => (
                          <SocialIcon
                              target='_blank'
                              rel='noopener noreferrer'
                              key={social._id}
                              url={social.url}
                              fgColor='gray'
                              bgColor='transparent'
                          />
                      ))
                    : null}
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
                className='flex cursor-pointer flex-row items-center'
            >
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                    onClick={() => handleContactMe()}
                />
                <p className='hidden text-sm uppercase text-gray-400 md:inline-flex'>
                    Get in Touch
                </p>
            </motion.div>
        </header>
    );
}

export default Header;
