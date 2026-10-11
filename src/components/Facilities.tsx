import { useState } from 'react'
import { motion } from 'framer-motion'
import { gallery } from '../data/gallery'
import Heading from './Heading'
import Media from './Media'
import Lightbox from './Lightbox'

const items = gallery.filter((g) => g.category === 'facility')
export default function Facilities() {
  const [i, setI] = useState<number | null>(null)
  return (
    <section id="facilities" className="mx-auto max-w-6xl px-5 py-24">
      <Heading label="Facilities">{'Your space.\nYour strength.'}</Heading>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
        {items.map((s, n) => (
          <motion.button key={s.id} onClick={() => setI(n)} aria-label={`Open ${s.label}`}
            initial={{ clipPath: 'inset(100% 0 0 0)' }} whileInView={{ clipPath: 'inset(0% 0 0 0)' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: n * 0.08 }}
            className={`group relative overflow-hidden rounded-2xl border border-transparent text-left transition hover:border-ice ${s.tall ? 'row-span-2' : ''} ${n === 0 ? 'md:col-span-2' : ''}`}>
            <Media src={s.src} alt={s.alt} className="h-full w-full transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-obsidian/85 to-transparent" />
            <span className="absolute bottom-3 left-3 rounded-full bg-obsidian/60 px-3 py-1 text-sm backdrop-blur">{s.label}</span>
          </motion.button>
        ))}
      </div>
      <p className="mt-4 text-xs text-steel">Categories shown are placeholders until verified by the club.</p>
      {i !== null && <Lightbox items={items} index={i} onChange={setI} onClose={() => setI(null)} />}
    </section>
  )
}
