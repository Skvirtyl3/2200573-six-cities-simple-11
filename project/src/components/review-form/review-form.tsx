import { stars } from '../../const';
import ReviewStar from '../review-star/review-star';
import {useState} from 'react';
import { MIN_REQURID_SYMBOL_COUNT } from '../../const';
import { insertCommentsAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type ReviewFormProp = {
  offerId: number;
}

function ReviewForm({offerId}:ReviewFormProp) : JSX.Element
{
  const dispatch = useAppDispatch();
  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(insertCommentsAction({offerId: offerId, comment: formData.review, rating: formData.rating}));
    setFormData({review: '', rating: 0});
  }

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const [formData, setFormData] = useState({review: '', rating: 0});
  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars.map((item) => (<ReviewStar key={item.key} star={item} handleFieldChange={handleFieldChange} checked={formData.rating} />))}
      </div>
      <textarea value={formData.review} onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REQURID_SYMBOL_COUNT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.review.length >= MIN_REQURID_SYMBOL_COUNT && formData.rating)}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
