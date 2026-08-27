import { Hero } from "@/features/hero/components/Hero";
import { memo } from "react";

const HomePage = ()=> (
    <main>
        <Hero />
    </main>
)

export default memo(HomePage);