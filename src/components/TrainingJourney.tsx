import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Heading from './Heading'
import { prefersReduced } from '../lib/motion'

gsap.registerPlugin(ScrollTrigger)
const steps = [
  ['Show up', 'The first step is consistency.'],
  ['Put in the work', 'Focus on proper technique and effort.'],
  ['Build your routine', 'Progress at a sustainable pace.'],
  ['Keep moving forward', 'Stay committed to your individual goals.']
]
export default function TrainingJourney() {
  const root = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (prefersReduced()) { root.current?.querySelectorAll('.step').forEach((s) => s.classList.add('on')); return }
    const ctx = gsap.context(() => {
      gsap.fromTo('.line-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 60%', end: 'bottom 60%', scrub: true } })
      gsap.utils.toArray<HTMLElement>('.step').forEach((s) => ScrollTrigger.create({ trigger: s, start: 'top 60%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') }))
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section ref={root} className="mx-auto max-w-4xl px-5 py-24">
      <Heading label="The journey">{'Four steps.\nOne direction.'}</Heading>
      <div className="steps relative pl-10 md:pl-16">
        <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-white/10 md:left-5"><div className="line-fill h-full origin-top bg-electric shadow-[0_0_14px_#078BFF]" /></div>
        {steps.map(([t, d], i) => (
          <div key={t} className="step py-12 opacity-40 transition-opacity duration-500 [&.on]:opacity-100 [&.on_.dot]:bg-electric">
            <span className="dot absolute -ml-[2.05rem] mt-3 h-3 w-3 rounded-full bg-steel transition-colors md:-ml-[3.05rem]" />
            <p className="font-display text-ice">0{i + 1}</p>
            <h3 className="h-lg !text-4xl md:!text-6xl">{t}</h3>
            <p className="mt-3 text-lg text-clean/80">{d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
