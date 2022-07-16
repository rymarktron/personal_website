import Image from 'next/future/image'

import { Container } from '@/components/Container'
import logoTransistor from '@/images/logos/transistor.svg'
import logoIQC from '@/images/logos/IQC.svg'
import logoAmphenol from '@/images/logos/amphenol.svg'

const sponsors = [
  { name: 'IQC', logo: logoIQC },
  { name: 'Amphenol', logo: logoAmphenol },
  { name: 'Transistor', logo: logoTransistor },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Coops" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          My Past Internship Experiences
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <a href = "#"> <Image src={sponsor.logo} alt={sponsor.name} unoptimized /></a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
