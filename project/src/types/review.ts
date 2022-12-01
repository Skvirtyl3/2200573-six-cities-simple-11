import { Host } from './host';

export type Star = {
  key: string;
  value: number;
  description: string;
}

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}
