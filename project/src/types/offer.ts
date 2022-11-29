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

export enum ListWhatsInside {
  WiFi = 'Wi-Fi',
  Heating = 'Heating',
  Kitchen = 'Kitchen',
  Fridge = 'Fridge',
  WashingMachine = 'Washing machine',
  CoffeeMachine = 'Coffee machine',
  Dishwasher = 'Dishwasher',
  Towels = 'Towels',
  BabySeat = 'Baby seat',
  CabelTV = 'Cabel TV'
}

export enum Rank {
  Pro = 'Pro'
}

export type OfferParameter = {
  key: string;
  isPremium: boolean;
  imgSrc: string;
  price: number;
  isNight: boolean;
  rating: number;
  name: string;
  type: TypeOffer;
  countBedrooms: number;
  countAdults: number;
  whatsInside: (string | ListWhatsInside)[];
  host: Host;
  desription: string;
  point: string | undefined | null;
  city: string;
}

export type Host = {
  name: string;
  rank: Rank;
  avatar: string;
}
