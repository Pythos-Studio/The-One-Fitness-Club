import { ArrowUpRight } from 'lucide-react'
import { gallery } from '../data/gallery'
import Heading from './Heading'
import Media from './Media'

const items = gallery.filter((g) => g.category === 'community')
export default function TrainersCommunity() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading label="Community">{'Stronger\ntogether.'}</Heading>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((s) => (
          <figure key={s.id} className={`group relative overflow-hidden rounded-2xl ${s.tall ? 'row-span-2' : ''}`}>
            <Media src={s.src} alt={s.alt} className="aspect-[3/4] h-full w-full transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-obsidian/30 transition group-hover:bg-obsidian/55" />
            <figcaption className="glass absolute inset-x-2 bottom-2 flex items-center justify-between !rounded-xl px-3 py-2 text-sm">{s.label}<ArrowUpRight size={16} className="text-ice transition group-hover:translate-x-0.5" aria-hidden /></figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-xs text-steel">Use only photos of trainers and members who have given permission.</p>
    </section>
  )
}
