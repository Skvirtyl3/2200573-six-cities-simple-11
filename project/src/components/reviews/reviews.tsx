import { reviews } from '../../mocks/reviews';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

function Reviews() : JSX.Element
{
  const count = reviews.length;
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{count}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (<Review key={item.key} review={item}/>))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
