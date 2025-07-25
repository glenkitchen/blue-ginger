import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'stay-over',
    title: 'Stay Over Service',
    description: 'Stay over at the client\'s home – including feeds, play, dog walks',
    price: 'R300/day + travel costs',
    icon: '🏠',
    gradient: 'from-pet-purple to-purple-600'
  },
  {
    id: 'check-in',
    title: 'Check-In Visits',
    description: 'Check in on your pet for 2+ hours – feed, play, walk',
    price: 'R200 + travel costs',
    icon: '✅',
    gradient: 'from-pet-teal to-pet-green'
  },
  {
    id: 'hourly',
    title: 'Hourly Pet Sitting',
    description: 'Spend the day/few hours with your pet',
    price: 'R200 + travel costs',
    icon: '⏰',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'dog-walks',
    title: 'Dog Walks',
    description: '30 minutes to 2 hours park or beach excursion',
    price: 'Contact for pricing',
    icon: '🚶',
    gradient: 'from-orange-500 to-yellow-500'
  }
];