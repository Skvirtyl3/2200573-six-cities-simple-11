import { Host } from './host';
import { Rating } from './offer';

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

export type Comment = [{
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}]
