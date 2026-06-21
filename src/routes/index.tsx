import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/wedding/Hero'
import { Couple } from '@/components/wedding/Couple'
import { Timeline } from '@/components/wedding/Timeline'
import { Venue } from '@/components/wedding/Venue'
import { Footer } from '@/components/wedding/Footer'
import { Divider } from '@/components/wedding/Divider'
import { Countdown } from '@/components/wedding/Countdown'
import { MusicToggle } from '@/components/wedding/MusicToggle'
import { Petals } from '@/components/wedding/Petals'
import { Diyas } from '@/components/wedding/Diyas'

export const Route = createFileRoute('/')({
  component: WeddingHome,
})

function WeddingHome() {
  return (
    <main className="relative bg-[#fdfbf7]">
      <Petals />
      <Diyas />
      
      {/* Fixed UI Controls */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
        <MusicToggle />
      </div>

      <Hero />
      
      <div className="relative z-10 bg-gradient-to-b from-[#fdfbf7] via-[#faf5eb] to-[#fdfbf7] pb-20">
        <Divider labelEn="Counting Every Moment" labelMr="विवाहाची प्रतीक्षा..." />
        <section className="py-12">
          <Countdown />
        </section>

        <section className="py-16 overflow-hidden">
          <Couple />
        </section>

        <Divider labelEn="Wedding Rituals" labelMr="विवाह कार्यक्रम" />
        <section className="py-16">
          <Timeline />
        </section>

        <Divider labelEn="The Venue" labelMr="स्थळ" />
        <section className="py-16">
          <Venue />
        </section>
      </div>

      <Footer />
    </main>
  )
}
