import { City } from './city';
import { Host } from './host';
import { Location } from './location';

export enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

export enum TypeOffer {
  PrivateRoom = 'Private room',
  Apartment = 'Apartment'
}


export type OfferType =
{
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Comment = [{
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}]

export type AuhtoriseUser = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}
