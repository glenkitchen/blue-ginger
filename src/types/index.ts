export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  gradient: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  initial: string;
  avatarColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}