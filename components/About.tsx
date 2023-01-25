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
            className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
        >
            <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
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
            >
                <Image
                    className="mt-[200px] mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mt-0 md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
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
                <div className="md:w-[400px] xl:w-[600px]">
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
