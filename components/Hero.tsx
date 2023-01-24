import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import BackgroundCircles from "@/components/BackgroundCircles";

type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, the Name's Gabin Williams",
            "Coffee-mug-always-full.tsx",
            "<MagicalErrorEliminator />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
        </motion.div>
    );
}

export default Hero;
