import { Fragment } from 'react';
import { Star } from '../../types/review';

type StarReviewProp = {
  star: Star;
  checked: number;
  handleFieldChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function ReviewStar({star, checked, handleFieldChange}:StarReviewProp) : JSX.Element
{
  const numberStars = star.value.toString().concat('-stars');

  return(
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating"
        onChange={handleFieldChange} value={star.value} id={numberStars} type="radio" checked={star.value === checked}
      />
      <label htmlFor={numberStars} className="reviews__rating-label form__rating-label" title={star.description}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>);
}

export default ReviewStar;
