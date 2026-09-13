import { memo } from "react";
import { ProjectsSection } from "@/features/projects";
import { Hero } from "@/features/hero";
import {ExperienceSection} from "@/features/experience";
import { BlogSection } from "@/features/blog";
import ContactSection from "@/features/contact/components/ContactSection";

const HomePage = ()=> (
    <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
    </main>
)

export default memo(HomePage);