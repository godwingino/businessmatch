export interface User {
  id: string;
  firstName: string;
  email: string;
  isPremium: boolean;
  premiumExpiry?: Date;
}

export interface Business {
  id: string;
  name: string;
  phone: string;
  address: string;
  website: string;
  rating: number;
  niche: string;
  location: string;
}

export interface PremiumCode {
  code: string;
  isUsed: boolean;
  createdAt: Date;
}