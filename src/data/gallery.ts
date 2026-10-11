// Replace src with real, permitted photos placed in /public/images.
export interface Shot { id: string; label: string; alt: string; category: 'facility' | 'community' | 'social'; src: string; tall?: boolean }
export const gallery: Shot[] = [
  { id: 'f1', label: 'Strength training', alt: 'Strength training area', category: 'facility', src: '/images/strength.webp', tall: true },
  { id: 'f2', label: 'Free weights', alt: 'Free weights rack', category: 'facility', src: '/images/free-weights.webp' },
  { id: 'f3', label: 'Resistance machines', alt: 'Resistance machines', category: 'facility', src: '/images/machines.webp' },
  { id: 'f4', label: 'Cardio', alt: 'Cardio equipment', category: 'facility', src: '/images/cardio.webp', tall: true },
  { id: 'c1', label: 'Trainers', alt: 'Trainers at the club', category: 'community', src: '/images/trainers.webp' },
  { id: 'c2', label: 'Training sessions', alt: 'A training session', category: 'community', src: '/images/session.webp', tall: true },
  { id: 'c3', label: 'Member moments', alt: 'Members training together', category: 'community', src: '/images/members.webp' },
  { id: 'c4', label: 'Group energy', alt: 'Group moment', category: 'community', src: '/images/group.webp' },
  { id: 's1', label: 'Instagram', alt: 'Instagram post 1', category: 'social', src: '/images/ig-1.webp' },
  { id: 's2', label: 'Instagram', alt: 'Instagram post 2', category: 'social', src: '/images/ig-2.webp' },
  { id: 's3', label: 'Instagram', alt: 'Instagram post 3', category: 'social', src: '/images/ig-3.webp' },
  { id: 's4', label: 'Instagram', alt: 'Instagram post 4', category: 'social', src: '/images/ig-4.webp' }
]
