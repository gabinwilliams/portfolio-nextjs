import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

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
        <div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>
        </div>
    );
}

export default Hero;
