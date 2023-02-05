import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import woods from "@/public/woods.JPG";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
                    className="mt-[100px] h-56 w-56 flex-shrink-0 rounded-full object-cover md:mt-0 md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:mt-[200px] xl:h-[600px] xl:w-[500px]"
                    src={urlFor(pageInfo?.profilePic).url()}
                    width="600"
                    height="800"
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
                <div className="h-[200px] overflow-hidden overflow-y-scroll md:h-[400px] md:w-[400px] xl:w-[600px]">
                    <p className="text-base">
                        {pageInfo.backgroundInformation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
