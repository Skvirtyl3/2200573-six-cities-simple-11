import { Rating } from '../types/offer';
import { ReviewType, Star} from '../types/review';

export const reviews: ReviewType[] =
[{
  key: 'dc4c13c9-77cb-4801-a2f8-ecc9d24ef0be',
  text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  rating: 4.4,
  date: new Date(2019,3,24),
  host:
  {
    id: 1,
    name: 'Max',
    isPro: true,
    avatarUrl: 'img/avatar-max.jpg'
  },
}];

export const stars: Star[] =
[
  {
    key: '02202d05-a1f3-443c-9e26-77c5b24e0cba',
    value: Rating.Five,
    description: 'perfect'
  },
  {
    key: '1c387cb7-e89d-4b57-96ba-1e002efdb2af',
    value: Rating.Four,
    description: 'good'
  },
  {
    key: '37aa1b4d-c277-4e67-a93b-58d8106aea0f',
    value: Rating.Three,
    description: 'not bad'
  },
  {
    key: '5b6315da-94ad-46a8-ac00-813a9d06aae0',
    value: Rating.Two,
    description: 'badly'
  },
  {
    key: '00aa67ca-8bf3-436e-bbca-741572817c6f',
    value: Rating.One,
    description: 'terribly'
  },
];
