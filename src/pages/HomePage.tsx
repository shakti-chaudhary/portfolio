import { memo } from "react";
import { ProjectsSection } from "@/features/projects";
import { Hero } from "@/features/hero/components/Hero";
import ExperienceSection from "@/features/experience/components/ExperienceSection";

const HomePage = ()=> (
    <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
    </main>
)

export default memo(HomePage);