import React from 'react';
import Image from 'next/image';
import redux_icon from 'public/icons/redux_icon.svg';
import { motion } from 'framer-motion';
import { Project } from '../typings';

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <div className='relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row'>
            <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
                Projects
            </h3>
            <div className='relative z-20 mt-[20px] flex w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden md:mt-[150px] xl:mt-[100px]'>
                {projects?.map((project, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className='flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-2 p-20 md:p-20'
                        key={project._id}
                    >
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                className='h-28 w-28'
                                src={redux_icon}
                                alt={'tech icon'}
                            ></Image>
                        </motion.div>
                        <div className='max-w-6xl space-y-3 px-0 md:px-10'>
                            <h4 className='text-center text-2xl font-semibold'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {i + 1} of {projects.length}:
                                </span>{' '}
                                Twitter Clone
                            </h4>
                            <div className='flex items-center justify-center space-x-2'>
                                {project?.technologies.map((technology) => (
                                    <Image
                                        className='h-10 w-10 object-contain'
                                        key={technology._id}
                                        src={technology.image}
                                        alt={'tech icon'}
                                        width='50'
                                        height='50'
                                    ></Image>
                                ))}
                            </div>
                            <p className=' h-[200px] overflow-hidden overflow-y-scroll text-center text-lg md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 '></div>
        </div>
    );
}

export default Projects;
