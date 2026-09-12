import { memo } from "react";
import { ProjectsSection } from "@/features/projects";
import { Hero } from "@/features/hero";
import {ExperienceSection} from "@/features/experience";
import { BlogSection } from "@/features/blog";

const HomePage = ()=> (
    <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
    </main>
)

export default memo(HomePage);