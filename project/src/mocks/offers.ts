import { OfferType, TypeOffer } from '../types/offer';

export const offers: OfferType[] =
[
  {
    id: 1,
    isPremium: true,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: TypeOffer.Apartment,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: 2,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 4.2,
    title: 'Wood and stone place',
    type: TypeOffer.PrivateRoom,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
    }
  },
  {
    id: 3,
    isPremium: false,
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: TypeOffer.Apartment,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    }
  },
  {
    id: 4,
    isPremium: true,
    previewImage: 'img/apartment-03.jpg',
    price: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: TypeOffer.Apartment,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: 5,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 4.8,
    title: 'Wood and stone place',
    type: TypeOffer.PrivateRoom,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374,
        longitude: 4.88,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    }
  },
  {
    id: 6,
    isPremium: false,
    previewImage: 'img/room.jpg',
    price: 80,
    rating: 4.0,
    title: 'Парижский Wood and stone place',
    type: TypeOffer.PrivateRoom,
    bedrooms: 3,
    maxAdults: 4,
    goods: ['BabySeat', 'CabelTV'],
    host:
    {
      id: 1,
      name : 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.50,
        longitude: 2.20,
        zoom: 10
      }
    },
    images: [],
    location:
    {
      latitude: 48.50,
      longitude: 2.20,
      zoom: 10
    }
  },
];
