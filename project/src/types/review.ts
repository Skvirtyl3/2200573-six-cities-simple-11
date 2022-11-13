import { Host, Rating } from './offer';

export type ReviewType = {
  key: string;
  text: string;
  rating: Rating;
  date: Date;
  host: Host;
}

export type Star = {
  key: string;
  value: number;
  description: string;
}
