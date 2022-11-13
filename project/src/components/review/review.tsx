import { ReviewType } from '../../types/review';
import moment from 'moment';
import { GetRatingStileByNumber } from '../../helpers/rating';

type ReviewProp = {
  review: ReviewType;
}

function Review({review}:ReviewProp) :JSX.Element
{
  const ratingWidth: string = GetRatingStileByNumber(review.rating);
  return(
    <li className="reviews__item">
      {
        review.host &&
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={review.host.avatar} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {review.host.name}
          </span>
        </div>
      }
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={(moment(review.date)).format('YYYY-MM-DD')}>{(moment(review.date)).format('MMM YYYY')}</time>
      </div>
    </li>
  );
}

export default Review;
