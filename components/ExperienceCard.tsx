import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience, Technology } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
    job: Experience;
};

function ExperienceCard({ job }: Props) {
    return (
        <article className="mt-[100px] flex h-[500px] w-[380px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden overflow-y-scroll rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:mt-[100px] md:w-[600px] xl:mt-[400px] xl:w-[900px]">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <Image
                    className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
                    src={urlFor(job?.companyImage).url()}
                    alt={"company logo"}
                    width="56"
                    height="56"
                ></Image>
            </motion.div>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{job?.jobTitle}</h4>
                <p className="mt-1 text-2xl font-bold">{job?.companyName}</p>
                <div className="my-2 flex space-x-2">
                    {job?.technologies.map((technology) => (
                        <Image
                            key={technology._id}
                            className="h-10 w-10"
                            src={urlFor(technology.image).url()}
                            alt={"tech picture"}
                            width="100"
                            height="100"
                        ></Image>
                    ))}
                </div>
                <p className="py-5 uppercase text-gray-300">
                    {job?.dateStarted} -{" "}
                    {job?.isCurrentlyWorkingHere ? "Current" : job?.dateEnded}
                </p>
                <ul className="ml-5 list-disc space-y-4 text-lg">
                    {job?.companyBullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
