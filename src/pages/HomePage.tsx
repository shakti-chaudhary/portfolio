import { Hero } from "@/features/hero/components/Hero";
import { ProjectsSection } from "@/features/projects";
import { memo } from "react";

const HomePage = ()=> (
    <main>
        <Hero />
        <ProjectsSection />
    </main>
)

export default memo(HomePage);