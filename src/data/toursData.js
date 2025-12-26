export const tours = [
  // Snorkeling Tours
  {
    id: 'turtle-snorkeling',
    name: 'Turtle Snorkeling',
    description: 'Swim alongside majestic sea turtles in their natural habitat. Our most popular tour with guaranteed turtle sightings!',
    price: 17,
    duration: '2 hours',
    groupSize: '1-30 people',
    category: 'snorkeling',
    isPopular: true,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Most Popular',
    badgeColor: '#ef4444',
    includes: ['Equipment', 'Guide', 'Refreshments', 'Photos']
  },
  {
    id: 'night-snorkeling',
    name: 'Night Snorkeling Adventure',
    description: 'Experience the magical underwater world after dark. Discover bioluminescent creatures and nocturnal marine life.',
    price: 25,
    duration: '2 hours',
    groupSize: '1-30 people',
    category: 'snorkeling',
    isChefChoice: true,
    rating: 4.6,
    image: 'https://www.experienceparkhyattmaldives.com/wp-content/uploads/2021/02/Night-Snorkeling.png',
    badge: 'Magical',
    badgeColor: '#8b5cf6',
    includes: ['Night Equipment', 'Underwater Lights', 'Guide', 'Hot Drinks']
  },
  {
    id: 'coral-reef-snorkeling',
    name: 'Coral Reef Exploration',
    description: 'Explore vibrant coral reefs teeming with colorful tropical fish and marine life in crystal clear waters.',
    price: 20,
    duration: '2.5 hours',
    groupSize: '1-20 people',
    category: 'snorkeling',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated',
    badgeColor: '#0891b2',
    includes: ['Equipment', 'Guide', 'Underwater Camera', 'Snacks']
  },

  // Diving Tours
  {
    id: 'scuba-diving',
    name: 'Scuba Diving Experience',
    description: 'Explore the depths of Mirissa with our professional scuba diving experience. Perfect for beginners and certified divers alike.',
    price: 65,
    duration: '3 hours',
    groupSize: '1-8 people',
    category: 'diving',
    isPopular: true,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Top Rated',
    badgeColor: '#22c55e',
    includes: ['Full Equipment', 'PADI Instructor', 'Photos', 'Certificate']
  },
  {
    id: 'discover-scuba',
    name: 'Discover Scuba Diving',
    description: 'First time diving? Our beginner-friendly program teaches you the basics with experienced instructors in safe conditions.',
    price: 50,
    duration: '2.5 hours',
    groupSize: '1-4 people',
    category: 'diving',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1682687981630-cefe9cd73072?q=80&w=2071&auto=format&fit=crop',
    badge: 'Beginner Friendly',
    badgeColor: '#3b82f6',
    includes: ['Equipment', 'Training', 'Instructor', 'Insurance']
  },
  {
    id: 'advanced-diving',
    name: 'Advanced Deep Diving',
    description: 'For certified divers seeking deeper adventures. Explore shipwrecks and deep reef systems with expert guides.',
    price: 95,
    duration: '4 hours',
    groupSize: '1-6 people',
    category: 'diving',
    isChefChoice: true,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Expert',
    badgeColor: '#f59e0b',
    includes: ['Advanced Equipment', 'Expert Guide', 'Nitrox Option', 'Lunch']
  },

  // Whale & Dolphin Tours
  {
    id: 'whale-watching',
    name: 'Whale Watching Experience',
    description: 'Exclusive experience to witness magnificent blue whales and sperm whales in the deep blue waters of Mirissa.',
    price: 350,
    priceType: 'group',
    duration: '4-5 hours',
    groupSize: 'Up to 6 people',
    category: 'whale',
    isChefChoice: true,
    rating: 4.7,
    image: 'https://www.shoreexcursionsgroup.com/img/tour/SPMOWHALE-2.jpg',
    badge: 'Premium',
    badgeColor: '#8b5cf6',
    includes: ['Boat Trip', 'Expert Guide', 'Breakfast', 'Binoculars']
  },
  {
    id: 'dolphin-watching',
    name: 'Dolphin Encounter Tour',
    description: 'Watch playful dolphins in their natural habitat. Often includes spinner dolphins, bottlenose, and striped dolphins.',
    price: 35,
    duration: '3 hours',
    groupSize: '1-30 people',
    category: 'whale',
    isPopular: true,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    badge: 'Family Friendly',
    badgeColor: '#0891b2',
    includes: ['Boat Trip', 'Guide', 'Refreshments', 'Life Jackets']
  },

  // Fishing Tours
  {
    id: 'deep-sea-fishing',
    name: 'Deep Sea Fishing Trip',
    description: 'Venture into the deep waters for an exciting fishing adventure. Catch tuna, marlin, and other big game fish.',
    price: 150,
    duration: '4-5 hours',
    groupSize: 'Up to 4 people',
    category: 'fishing',
    rating: 4.5,
    image: 'https://walleyex.com/cdn/shop/articles/deep_sea_fishing.png?v=1726544030',
    badge: 'Adventure',
    badgeColor: '#f97316',
    includes: ['Fishing Gear', 'Bait', 'Guide', 'Cooler Box']
  },
  {
    id: 'reef-fishing',
    name: 'Reef Fishing Tour',
    description: 'Enjoy relaxed fishing at beautiful coral reefs. Perfect for beginners and those who love calm waters.',
    price: 100,
    duration: '3 hours',
    groupSize: 'Up to 4 people',
    category: 'fishing',
    rating: 4.4,
    image: 'https://fishingbooker-prod-blog-backup.s3.amazonaws.com/blog/media/2021/03/14143827/Red-Snapper-MB.jpg',
    badge: 'Relaxing',
    badgeColor: '#06b6d4',
    includes: ['Fishing Gear', 'Bait', 'Guide', 'Snacks']
  },
  {
    id: 'traditional-fishing',
    name: 'Traditional Fishing Experience',
    description: 'Experience traditional Sri Lankan fishing methods with local fishermen. Learn ancient techniques passed down generations.',
    price: 45,
    duration: '2-3 hours',
    groupSize: '1-6 people',
    category: 'fishing',
    rating: 4.8,
    image: 'https://galvestonseaventures.com/wp-content/uploads/2025/02/Shane-Sep-stoked.jpg',
    badge: 'Cultural',
    badgeColor: '#14b8a6',
    includes: ['Equipment', 'Local Guide', 'Tea & Snacks', 'Fish to Keep']
  },

  // Special Tours
  {
    id: 'sunset-cruise',
    name: 'Sunset Cruise',
    description: 'Romantic sunset cruise along the beautiful Mirissa coast. Perfect for couples and photography enthusiasts.',
    price: 40,
    duration: '2 hours',
    groupSize: '2-12 people',
    category: 'special',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    badge: 'Romantic',
    badgeColor: '#ec4899',
    includes: ['Boat Trip', 'Drinks', 'Snacks', 'Photography']
  },
  {
    id: 'private-charter',
    name: 'Private Boat Charter',
    description: 'Customize your perfect day on the water. Private boat for your group with personalized itinerary.',
    price: 250,
    priceType: 'boat',
    duration: 'Full Day',
    groupSize: 'Up to 8 people',
    category: 'special',
    isChefChoice: true,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    badge: 'Exclusive',
    badgeColor: '#fbbf24',
    includes: ['Private Boat', 'Captain', 'Snorkeling Gear', 'Lunch', 'Drinks']
  }
]

export const categories = [
  { id: 'all', name: 'All Tours', icon: '🌊', section: 'all' },
  { id: 'snorkeling', name: 'Snorkeling', icon: '🤿', section: 'water' },
  { id: 'diving', name: 'Scuba Diving', icon: '🐠', section: 'water' },
  { id: 'whale', name: 'Whale & Dolphin', icon: '🐋', section: 'marine' },
  { id: 'fishing', name: 'Fishing', icon: '🎣', section: 'adventure' },
  { id: 'special', name: 'Special Tours', icon: '⭐', section: 'special' }
]

export const tourSections = [
  { id: 'water', name: 'Water Activities', icon: '🌊' },
  { id: 'marine', name: 'Marine Life', icon: '🐋' },
  { id: 'adventure', name: 'Adventure', icon: '🎣' },
  { id: 'special', name: 'Special Experiences', icon: '⭐' }
]

export const formatPrice = (price, priceType) => {
  if (priceType === 'group') {
    return `$${price}/group`
  } else if (priceType === 'boat') {
    return `$${price}/boat`
  }
  return `$${price}/person`
}
