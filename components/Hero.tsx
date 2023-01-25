import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import water from "@/public/water.JPG";

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, the Name's Gabin Williams",
            "Coffee-mug-always-full.tsx",
            "<ErrorDestroyer />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <Image
                className="relative rounded-full h-44 w-44 mx-auto object-cover"
                src={water}
                alt={"profile image"}
            ></Image>
            <div className="z-20">
                <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[10px]">
                    Software Engineer
                </h2>
                <h1 className="text-5xl lg:6xl font-semibold px-10 ">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className="pt-5">
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
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;
