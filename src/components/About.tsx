import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'
import Media from './Media'

const pillars = [
  ['Discipline', 'Build a consistent training habit.'],
  ['Strength', 'Challenge yourself at your own pace.'],
  ['Community', 'Train in an environment that encourages progress.']
]
export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:items-center">
      <motion.div initial={{ clipPath: 'inset(0 100% 0 0)' }} whileInView={{ clipPath: 'inset(0 0% 0 0)' }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="aspect-[4/5] overflow-hidden rounded-[2rem_.75rem_2rem_.75rem]">
        <Media src="/images/about.webp" alt="Inside The One Fitness Club" className="h-full w-full" />
      </motion.div>
      <motion.div {...reveal}>
        <p className="mb-3 text-sm uppercase tracking-[.25em] text-ice">About</p>
        <h2 className="h-lg">More than<br />a workout.</h2>
        <p className="mt-6 max-w-md text-lg text-clean/80">Progress comes from showing up, putting in the work, and staying consistent. The One Fitness Club is a place to train, challenge yourself, and keep moving towards your goals.</p>
        <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {pillars.map(([t, d], i) => (
            <li key={t} className="flex gap-5 py-4"><span className="font-display text-ice">0{i + 1}</span><div><h3 className="text-lg font-bold">{t}</h3><p className="text-steel">{d}</p></div></li>
          ))}
        </ol>
      </motion.div>
    </section>
  )
}
