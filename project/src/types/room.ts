export enum Rating {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

export enum TypeRoom {
  PrivateRoom = 'Private room',
  Apartment = 'Apartment'
}

export type RoomParameter = {
  key: string;
  isPremium: boolean;
  imgSrc: string;
  price: number;
  isNight: boolean;
  rating: Rating;
  name: string;
  type: TypeRoom;
}
