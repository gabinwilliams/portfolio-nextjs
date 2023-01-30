import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import react_icon from "public/icons/react_icon.svg";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <Image
                    src={react_icon}
                    alt={"tech icon"}
                    className="h-24 w-24 rounded-full border border-gray-500 object-cover hover:animate-pulse md:h-28 md:w-28 xl:h-32 xl:w-32"
                ></Image>
            </motion.div>
        </div>
    );
}

export default Skill;
