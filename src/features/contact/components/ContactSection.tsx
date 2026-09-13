import { Container, Section } from '@/components/layout'
import { Icon } from '@/components/ui'
import { AVAILABILITY, CONTACT_EMAIL, CONTACT_LOCATION, FOOTER_SOCIAL } from '@/lib/constants'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <Section id="contact" spacing="xl">
    <Container>
      <div className="panel overflow-hidden rounded-4xl p-8 md:p-12 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Pitch + details */}
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              Contact
            </p>

            <h2 className="text-headline-xl text-balance text-ink">
              Let's build something{' '}
              <span className="display italic text-accent">worth keeping</span>
            </h2>

            <p className="prose-editorial mt-6 text-pretty">
              Open to new collaborations and engineering challenges — product work, platform
              rescues, or a system that needs to go faster. Tell me what you're building.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon name="mail" size={20} />
                  <span className="sr-only">Email</span>
                </dt>
                <dd>
                  <a // href={`mailto:${CONTACT_EMAIL}`}
                   className="font-headline font-semibold cursor-pointer text-ink transition-colors hover:text-accent" >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>

              <div className="flex items-center gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon name="location_on" size={20} />
                  <span className="sr-only">Location</span>
                </dt>
                <dd className="text-muted">{CONTACT_LOCATION}</dd>
              </div>

              <div className="flex items-center gap-4">
                <dt className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12 text-accent">
                  <Icon name="schedule" size={20} />
                  <span className="sr-only">Availability</span>
                </dt>
                <dd className="text-muted">{AVAILABILITY} · replies within 24h</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              {FOOTER_SOCIAL.map(({ platform, href }) => (
                <Link key={platform} to='' // to={href}   href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="panel-soft pointer-events-none rounded-full px-4 py-2 font-headline text-xs font-semibold text-muted transition-colors hover:text-accent" >
                  {platform}
                </Link>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  </Section>
  )
}

export default memo(ContactSection)