import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "stay-over",
    title: "Stay Over Service",
    description:
      "Stay over at the client's home – including feeds, play, dog walks",
    price: "R300/day + travel costs",
    icon: "🏠",
    gradient: "from-primary to-primary",
    image: "/image-1.jpg",
  },
  {
    id: "check-in",
    title: "Check-In Visits",
    description: "Check in on your pet for 2+ hours – feed, play, walk",
    price: "R200 + travel costs",
    icon: "✅",
    gradient: "from-secondary to-secondary",
    image: "/image-2.jpg",
  },
  {
    id: "hourly",
    title: "Hourly Pet Sitting",
    description: "Spend the day/few hours with your pet",
    price: "R200 + travel costs",
    icon: "⏰",
    gradient: "from-accent to-accent",
    image: "/image-3.jpg",
  },
  {
    id: "dog-walks",
    title: "Dog Walks",
    description: "30 minutes to 2 hours park or beach excursion",
    price: "Contact for pricing",
    icon: "🚶",
    gradient: "from-primary to-secondary",
    image: "/image-4.jpg",
  },
];
