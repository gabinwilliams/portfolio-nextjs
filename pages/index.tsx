import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { HomeIcon } from "@heroicons/react/24/solid";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { PageInfo, Experience, Skill, Project, Social } from "@/typings";

type Props = {
    pageInfo: PageInfo;
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

export default function Home({
    pageInfo,
    experience,
    skills,
    projects,
    socials,
}: Props) {
    return (
        <div className="z-0 h-screen snap-y snap-mandatory overflow-x-scroll overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Gabin&apos;s Portfolio</title>
            </Head>
            <Header socials={socials} />
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section>
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            <section id="experience" className="snap-start">
                <WorkExperience experience={experience} />
            </section>
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>
            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>
            <section id="contact" className="snap-start">
                <ContactMe />
            </section>
            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <HomeIcon className="h-10 w-10 cursor-pointer hover:text-[#F7AB0A]/80" />
                    </div>
                </footer>
            </Link>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const pageInfo: PageInfo[] = await fetchPageInfo();
    const experience: Experience[] = await fetchExperience();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experience,
            skills,
            projects,
            socials,
        },
        // Use ISR instead of SSR because it's faster and caches the data and re-validates the cache every 30 seconds.
        revalidate: 60 * 60,
    };
};
