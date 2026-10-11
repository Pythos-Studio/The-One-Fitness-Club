import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { prefersReduced } from '../lib/motion'

export default function Preloader() {
  const skip = prefersReduced() || sessionStorage.getItem('intro') === '1'
  const [show, setShow] = useState(!skip)
  useEffect(() => {
    if (!show) return
    sessionStorage.setItem('intro', '1')
    const t = setTimeout(() => setShow(false), 1900)
    return () => clearTimeout(t)
  }, [show])
  return (
    <AnimatePresence>
      {show && (
        <motion.div aria-hidden className="fixed inset-0 z-[100] grid place-items-center bg-obsidian"
          exit={{ clipPath: 'circle(0% at 50% 50%)' }} initial={{ clipPath: 'circle(150% at 50% 50%)' }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
          <motion.div className="blob absolute bg-electric/70 blur-xl" initial={{ width: 200, height: 2, opacity: 0.9 }}
            animate={{ width: 180, height: 180, opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} />
          <motion.div className="relative text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
            <p className="font-display text-2xl font-bold uppercase tracking-tight sm:text-4xl">The One Fitness Club</p>
            <p className="mt-2 text-xs uppercase tracking-[.3em] text-ice">Strength · Discipline · Progress</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
