import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import redux_icon from "public/icons/redux_icon.svg";

type Props = {};

function ExperienceCard({}: Props) {
    return (
        <article className="mt-[200px] flex h-[600px] w-[380px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden overflow-y-scroll rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:mt-[200px] md:w-[600px] xl:mt-[400px] xl:w-[900px]">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
                    src={
                        "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/302747702_447443000744687_133397913000188583_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ie9_M-py00gAX_GSkHI&_nc_ht=scontent-msp1-1.xx&oh=00_AfBY3owGAkgSYy8jijwK9w-KpFM3wiHJnhWgYWwELvy-NA&oe=63D577FE"
                    }
                    alt={"company logo"}
                    width="56"
                    height="56"
                ></Image>
            </motion.div>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Software Engineer</h4>
                <p className="mt-1 text-2xl font-bold">Turnberry Solutions</p>
                <div className="my-2 flex space-x-2">
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={redux_icon}
                        alt={"tech picture"}
                    ></Image>
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={redux_icon}
                        alt={"tech picture"}
                    ></Image>
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={redux_icon}
                        alt={"tech picture"}
                    ></Image>
                </div>
                <p className="py-5 uppercase text-gray-300">
                    Start data - End date
                </p>
                <ul className="ml-5 list-disc space-y-4 text-lg">
                    <li>
                        Summary points Summary points Summary points Summary
                        points
                    </li>
                    <li>
                        Summary points Summary points Summary points Summary
                        points
                    </li>
                    <li>
                        Summary points Summary points Summary points Summary
                        points
                    </li>
                    <li>
                        Summary points Summary points Summary points Summary
                        points
                    </li>
                    <li>
                        Summary points Summary points Summary points Summary
                        points
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
