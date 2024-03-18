import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from '../typings';

type Props = {
    job: Experience;
};

function ExperienceCard({ job }: Props) {
    return (
        <article className='mt-[50px] flex h-[480px] w-[350px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-100 transition-opacity duration-200 hover:opacity-100 md:mt-[100px] md:h-[60vh] md:w-[600px] md:overflow-y-scroll md:opacity-50 xl:mt-[100px] xl:w-[700px]'>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className='h-32 w-32 rounded-sm object-contain object-center'
                    src={job?.companyImage}
                    alt={'company logo'}
                    width='200'
                    height='200'
                ></Image>
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{job?.jobTitle}</h4>
                <p className='mt-1 text-2xl font-bold'>{job?.companyName}</p>
                <div className='my-2 flex flex-wrap'>
                    {job?.technologies?.map((technology) => (
                        <Image
                            key={technology._id}
                            className='m-1 h-10 w-10 object-contain'
                            src={technology?.image}
                            alt={'tech picture'}
                            width='100'
                            height='100'
                        ></Image>
                    ))}
                </div>
                <p className='py-5 uppercase text-gray-300'>
                    {new Date(job?.dateStarted).toDateString()} -{' '}
                    {job?.isCurrentlyWorkingHere
                        ? 'Current'
                        : job?.dateEnded.toString()}
                </p>
                <ul className='ml-5 list-disc space-y-4 text-lg'>
                    {job?.companyBullets?.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
