import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '../typings';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

function TechSkill({ directionLeft, skill }: Props) {
    return (
        <div className='group flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -50 : 50,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    src={skill?.image}
                    alt={'tech icon'}
                    width='100'
                    height='100'
                    className='h-18 w-18 object-contain hover:animate-pulse md:h-20 md:w-20'
                ></Image>
            </motion.div>
        </div>
    );
}

export default TechSkill;
