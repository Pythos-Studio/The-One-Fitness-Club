import { motion } from 'framer-motion'
import { reveal } from '../lib/motion'
export default function Heading({ label, children }: { label: string; children: string }) {
  return (
    <motion.div {...reveal} className="mb-10 md:mb-14">
      <p className="mb-3 text-sm font-medium uppercase tracking-[.25em] text-ice">{label}</p>
      <h2 className="h-lg whitespace-pre-line">{children}</h2>
    </motion.div>
  )
}
