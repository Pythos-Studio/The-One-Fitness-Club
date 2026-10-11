import { Instagram } from 'lucide-react'
import { gallery } from '../data/gallery'
import { business } from '../config/business'
import Heading from './Heading'
import Media from './Media'
import LiquidButton from './LiquidButton'

const items = gallery.filter((g) => g.category === 'social')
export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading label="Instagram">{'Real people.\nReal work.'}</Heading>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((s) => (
          <a key={s.id} href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={`${s.alt} — open Instagram`} className="group relative aspect-square overflow-hidden rounded-2xl">
            <Media src={s.src} alt={s.alt} className="h-full w-full transition duration-700 group-hover:scale-105" />
            <Instagram className="absolute right-3 top-3 text-white/80" size={18} aria-hidden />
          </a>
        ))}
      </div>
      <p className="mt-4 text-xs text-steel">A curated gallery, not a live feed.</p>
      <div className="mt-6"><LiquidButton href={business.instagramUrl} external>Follow on Instagram</LiquidButton></div>
    </section>
  )
}
