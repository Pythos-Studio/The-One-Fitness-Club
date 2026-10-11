// Single source of truth. Fill in VERIFIED details from the owner before launch.
export const business = {
  name: 'The One Fitness Club',
  area: 'Tilak Nagar, Mumbai',
  instagramHandle: 'theonefitnessclub28',
  instagramUrl: 'https://www.instagram.com/theonefitnessclub28/',
  // Digits only with country code, e.g. '919876543210'. Leave '' until verified.
  whatsappNumber: '',
  phone: '', // e.g. '+919876543210'
  address: '', // verified street address
  hours: '', // e.g. 'Mon–Sat 6am–10pm'
  mapsUrl: '', // verified Google Maps link
  studioName: 'Pythos Studio',
  studioUrl: 'https://github.com/PythosX'
}
export const whatsappReady = /^\d{10,15}$/.test(business.whatsappNumber)
export const waLink = (text: string) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`
