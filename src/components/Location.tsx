import { MapPin, Phone, Clock, Instagram } from 'lucide-react'
import { business } from '../config/business'
import Heading from './Heading'
import LiquidButton from './LiquidButton'

export default function Location() {
  const rows = [
    { i: MapPin, t: business.address || 'Address to be confirmed by the club' },
    { i: Clock, t: business.hours || 'Opening hours to be confirmed' },
    { i: Phone, t: business.phone || 'Phone number to be confirmed', href: business.phone ? `tel:${business.phone}` : undefined },
    { i: Instagram, t: `@${business.instagramHandle}`, href: business.instagramUrl }
  ]
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Heading label={business.area}>{'Your training\nstarts here.'}</Heading>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
        <div className="ph absolute inset-0 opacity-70" aria-hidden />
        <div className="glass relative m-4 max-w-md p-6 sm:m-8">
          <ul className="space-y-4">
            {rows.map(({ i: Icon, t, href }) => (
              <li key={t} className="flex gap-3"><Icon className="mt-0.5 shrink-0 text-ice" size={18} aria-hidden />{href ? <a href={href} className="hover:text-ice" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t}</a> : <span>{t}</span>}</li>
            ))}
          </ul>
          <div className="mt-6">
            {business.mapsUrl ? <LiquidButton href={business.mapsUrl} external>Get directions</LiquidButton>
              : <LiquidButton href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${business.name} ${business.area}`)}`} external>Get directions</LiquidButton>}
          </div>
        </div>
        <div className="h-24 sm:h-40" />
      </div>
    </section>
  )
}
