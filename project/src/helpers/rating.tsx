import { ONE_STAR_WIDTH } from '../const';

export function GetRatingStileByNumber(value: number): string
{
  return (value * ONE_STAR_WIDTH).toString().concat('%');
}
