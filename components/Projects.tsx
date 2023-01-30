import React from "react";
import Image from "next/image";
import redux_icon from "public/icons/redux_icon.svg";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
                Projects
            </h3>
            <div className="relative z-20 mt-[75px] flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
                {projects.map((project, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
                        key={project}
                    >
                        <motion.div
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                className="h-32 w-32"
                                src={redux_icon}
                                alt={"tech icon"}
                            ></Image>
                        </motion.div>
                        <div className="max-w-6xl space-y-10 px-0 md:px-10">
                            <h4 className="text-center text-4xl font-semibold">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                Twitter Clone
                            </h4>
                            <p className="text-center text-lg md:text-left">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Nunc mattis enim ut tellus elementum sagittis
                                vitae. Sed odio morbi quis commodo odio. In
                                fermentum posuere urna nec tincidunt praesent
                                semper feugiat nibh. Sed enim ut sem viverra
                                aliquet eget.
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10 "></div>
        </div>
    );
}

export default Projects;
