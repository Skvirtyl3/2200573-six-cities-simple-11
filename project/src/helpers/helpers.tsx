import { ONE_STAR_WIDTH } from '../const';

export function GetRatingStileByNumber(value: number): string
{
  return (value * ONE_STAR_WIDTH).toString().concat('%');
}

export function Pluralize(count: number, noun: string, suffix = 's')
{
  return `${count} ${noun}${count !== 1 ? suffix : ''}`;
}

export function GetRandomElement<T>(items: T[])
{
  return items[Math.floor(Math.random() * items.length)];
}
