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
        <motion.div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
            <Image
                className="relative mx-auto h-44 w-44 rounded-full object-cover"
                src={water}
                alt={"profile image"}
            ></Image>
            <div className="z-20">
                <h2 className="text-md pb-2 uppercase tracking-[10px] text-gray-500">
                    Software Engineer
                </h2>
                <h1 className="lg:6xl px-10 text-5xl font-semibold ">
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
