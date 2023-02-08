import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/lib/sanity";

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, the Name's ${pageInfo?.name}`,
            "Coffee-mug-always-full.tsx",
            "<ErrorEliminator />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <motion.div className="relative flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <Image
                className="mx-auto h-44 w-44 rounded-full object-cover"
                alt={"profile image"}
                src={urlFor(pageInfo?.heroImage).url()}
                width="200"
                height="200"
            ></Image>
            <div className="z-20">
                <h2 className="text-md pb-2 uppercase tracking-[10px] text-gray-500">
                    {pageInfo?.role}
                </h2>
                <h1 className="lg:6xl px-10 text-5xl font-semibold">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
            </div>
            <div className="absolute bottom-20 flex flex-wrap justify-around md:static md:bottom-60">
                <Link href={"#about"}>
                    <button className="heroButton">About</button>
                </Link>
                <Link href={"#experience"}>
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href={"#skills"}>
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href={"#projects"}>
                    <button className="heroButton">Projects</button>
                </Link>
                <Link href={"#contact"}>
                    <button className="heroButton">Contact</button>
                </Link>
            </div>
        </motion.div>
    );
}

export default Hero;
