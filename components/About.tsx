import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import woods from "@/public/woods.JPG";

type Props = {};

function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.div
                initial={{
                    opacity: 0,
                    x: -200,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-shrink"
            >
                <Image
                    className="mt-[350px] md:mt-0 mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:h-[600px] xl:w-[500px]"
                    src={woods}
                    alt={"Profile Picture"}
                ></Image>
            </motion.div>
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]">
                        little
                    </span>{" "}
                    background:
                </h4>
                <div className="xl:w-[600px] md:w-[400px]">
                    <p className="text-base">
                        I&apos;m a lifelong learner with a strong urge to solve
                        problems with creative solutions. Software development
                        fulfills this fully. My current biggest problem is
                        figuring out how to fly fish successfully before the
                        fish stop biting. I&apos;m passionate about everything
                        outdoors and will jump in a car and head west if I have
                        anything longer than a 3-day weekend. I love to get
                        nerdy about blockchain and the different projects that
                        are providing real utility and may have a bright future.
                        I enjoy connecting with a wide variety of people whether
                        you&apos;re into tech or want to hit the trails,
                        introduce yourself, and let&apos;s chat!
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
