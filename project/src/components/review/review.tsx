import { Comment } from '../../types/review';
import moment from 'moment';
import { GetRatingStileByNumber } from '../../helpers/rating';

type ReviewProp = {
  comment: Comment;
}

function Review({comment}:ReviewProp) :JSX.Element
{
  const ratingWidth: string = GetRatingStileByNumber(comment.rating);
  return(
    <li className="reviews__item">
      {
        comment.user &&
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">
            {comment.user.name}
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
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={(moment(comment.date)).format('YYYY-MM-DD')}>{(moment(comment.date)).format('MMM YYYY')}</time>
      </div>
    </li>
  );
}

export default Review;
