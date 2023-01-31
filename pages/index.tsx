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

export default function Home() {
    return (
        <div className="z-0 h-screen snap-y snap-mandatory overflow-x-scroll overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <Head>
                <title>Gabin&apos;s Portfolio</title>
            </Head>
            <Header />
            <section id="hero" className="snap-start">
                <Hero />
            </section>
            <section id="about" className="snap-center">
                <About />
            </section>
            <section id="experience" className="snap-start">
                <WorkExperience />
            </section>
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            <section id="projects" className="snap-start">
                <Projects />
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
