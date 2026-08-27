import { Container } from "@/components/layout";
import { TechMarquee } from "./TechMarquee";
import { CONTACT_EMAIL, HERO_IMAGE, HERO_IMAGE_ALT, HERO_STATS, SITE_INTRO, SITE_OWNER, SITE_ROLE } from "@/lib/constants";
import { Badge, Button, Icon } from "@/components/ui";
import { StatusBadge } from "./StatusBadge";
import { RotatingSeal } from "./RotatingSeal";
import { projectsData } from "@/features/projects/data/projects.data";

const featured = projectsData[0]

export const Hero =() => (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <Container>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
                <div className="min-w-0 lg:col-span-6 xl:col-span-6">
                        <StatusBadge className="animate-entrance" />
              
                        <h1 className="text-display mt-7 text-balance text-ink animate-entrance" style={{ '--delay': '80ms' } as React.CSSProperties}   >
                          Precision Code
                          <br />
                          Meets <span className="display italic text-accent">Craft</span>
                        </h1>
              
                        <p className="prose-editorial mt-7 max-w-xl text-pretty animate-entrance"  style={{ '--delay': '160ms' } as React.CSSProperties} >
                          {SITE_INTRO}
                        </p>
              
                        <div className="mt-10 flex flex-wrap items-center gap-5 animate-entrance" style={{ '--delay': '240ms' } as React.CSSProperties}  >
                          <Button as="a" href="#work" variant="primary" size="lg" trailingDot>
                            View all projects
                          </Button>
                          {/* href={`mailto:${CONTACT_EMAIL}`} */}
                          <Button as="a"  variant="outline" size="lg">
                            Get in touch
                          </Button>
                          <RotatingSeal className="hidden sm:grid" />
                        </div>
              
                        {/* Featured project */}
                        <a  className="panel group mt-12 flex w-full max-w-md items-center gap-5 rounded-3xl p-4 hover-lift animate-entrance" style={{ '--delay': '320ms' } as React.CSSProperties} >
                          <span className="media-frame h-24 w-28 shrink-0 rounded-2xl">
                            <img  src={featured.imageUrl} alt={featured.imageAlt ?? featured.title} loading="lazy"
                             className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"  />
                          </span>
                          <span className="min-w-0 flex-1">
                            <Badge variant="accent" size="xs">
                              Featured
                            </Badge>
                            <span className="mt-2 block truncate font-headline text-base font-bold text-ink">
                              {featured.title}
                            </span>
                            <span className="mt-0.5 block truncate text-sm text-muted">
                              {featured.tags.join(' · ')}
                            </span>
                          </span>
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line/15 text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent">
                            <Icon name="arrow_outward" size={18} />
                          </span>
                     </a>
                 </div>

               {/* Visual card */}

               <div className="relative min-w-0 lg:col-span-6 xl:col-span-6">
                    <div className="media-frame aspect-4/5 rounded-4xl sm:aspect-5/4 lg:aspect-4/5 animate-reveal" style={{ '--delay': '120ms' } as React.CSSProperties}  >
                      <img src={HERO_IMAGE} alt={HERO_IMAGE_ALT}  className="h-full w-full object-cover"  loading="eager"  />
                      {/* Name plate */}
                      <div className="panel panel-overlay absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl px-5 py-4">
                        <div className="min-w-0">
                          <p className="truncate font-headline text-base font-bold text-ink">{SITE_OWNER}</p>
                          <p className="truncate text-sm text-muted">{SITE_ROLE}</p>
                        </div>
                        <Icon name="verified" size={22} className="shrink-0 text-accent" />
                      </div>
                    </div>
          
                    {/* Floating proof points */}
                    <div className="pointer-events-none absolute -left-3 top-10 hidden flex-col gap-4 sm:flex lg:-left-8">
                      {HERO_STATS.map((stat, i) => (
                        <div key={stat.id} className="panel panel-overlay animate-float rounded-2xl px-5 py-3.5" style={{ animationDelay: `${i * 800}ms` }}  >
                          <p className="font-headline text-2xl font-extrabold leading-none text-ink">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs text-muted">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

            </div>
        </Container>

        {/* Stack Ticker */}
        <div className="mt-16 border-y border-line/10 py-5 md:mt-24" >
         <TechMarquee />
        </div>
    </section>
)

