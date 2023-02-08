import React from "react";
import { motion } from "framer-motion";
import TechSkill from "./TechSkill";
import { Skill } from "@/typings";

type Props = {
    skills: Skill[];
};

function Skills({ skills }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:px-10"
        >
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
                Skills
            </h3>
            <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
                The list continues to grow and expand!
            </h3>
            <div className="mt-[50px] grid grid-cols-4 gap-5 p-5 md:mt-[100px] xl:mt-[200px]">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <TechSkill key={skill._id} skill={skill} />
                ))}
                {skills
                    ?.slice(skills.length / 2, skills.length)
                    .map((skill) => (
                        <TechSkill
                            key={skill._id}
                            skill={skill}
                            directionLeft
                        />
                    ))}
            </div>
        </motion.div>
    );
}

export default Skills;
