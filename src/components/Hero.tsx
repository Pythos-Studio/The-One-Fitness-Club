import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LiquidButton from './LiquidButton'
import GlassPanel from './GlassPanel'
import Media from './Media'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return
    ref.current?.style.setProperty('--mx', `${e.clientX}px`); ref.current?.style.setProperty('--my', `${e.clientY}px`)
  }
  return (
    <section id="home" ref={ref} onPointerMove={onMove} className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32">
      <motion.div style={{ y }} className="absolute inset-0 -top-10 h-[115%]">
        <Media src="/images/hero.webp" alt="Training at The One Fitness Club" className="h-full w-full" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
      <div className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(500px circle at var(--mx,70%) var(--my,30%), rgba(7,139,255,.22), transparent 60%)' }} />
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[.25em] text-ice">Tilak Nagar · Mumbai</p>
          <h1 className="h-xl">
            {['Built by', 'Discipline.'].map((l, i) => (
              <span key={l} className="block overflow-hidden"><motion.span className="block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>{l}</motion.span></span>
            ))}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-clean/85">Every rep counts. Every session moves you forward. Build strength, develop consistency, and work towards your fitness goals at The One Fitness Club.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LiquidButton href="#contact">Join the club</LiquidButton>
            <LiquidButton href="#facilities" ghost>Explore the gym</LiquidButton>
          </div>
        </div>
        <GlassPanel className="p-6">
          <p className="font-display text-xl font-bold uppercase leading-tight">Your training.<br />Your pace.<br />Your progress.</p>
          <div className="mt-5 h-1 overflow-hidden rounded bg-white/10"><motion.div className="h-full bg-electric" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.2, delay: 0.5 }} /></div>
        </GlassPanel>
      </div>
    </section>
  )
}
