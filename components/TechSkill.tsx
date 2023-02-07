import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Skill } from "@/typings";

type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

function TechSkill({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    src={urlFor(skill?.image).url()}
                    alt={"tech icon"}
                    width="100"
                    height="100"
                    className="h-22 w-22 md:h-26 md:w-26 object-cover hover:animate-pulse xl:h-32 xl:w-32"
                ></Image>
            </motion.div>
        </div>
    );
}

export default TechSkill;
