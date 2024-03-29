import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
    experience: Experience[];
};

function WorkExperience({ experience }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly px-10 text-left md:flex-row'
        >
            <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'>
                Experience
            </h3>
            <div className='flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 scrollbar overflow-y-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {experience.map((job) => (
                    <ExperienceCard key={job._id} job={job} />
                ))}
            </div>
        </motion.div>
    );
}

export default WorkExperience;
