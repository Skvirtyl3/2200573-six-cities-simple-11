import { MAX_REQURID_SYMBOL_COUNT, MIN_REQURID_SYMBOL_COUNT, stars } from '../../const';
import ReviewStar from '../review-star/review-star';
import {useState} from 'react';
import { insertCommentsAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getMessageSending, getMessageSendingError } from '../../store/offer-room-data/selectors';

type ReviewFormProp = {
  offerId: number;
}

function ReviewForm({offerId}:ReviewFormProp) : JSX.Element
{
  const dispatch = useAppDispatch();
  const isMessageSending = useAppSelector(getMessageSending);
  const isMessageSendingError = useAppSelector(getMessageSendingError);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(insertCommentsAction({offerId: offerId, comment: formData.review, rating: formData.rating}));
    setFormData({review: '', rating: 0});
  }

  function handleFieldChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: name === 'rating' ? Number(value) : value,
    });
  }

  const [formData, setFormData] = useState({review: '', rating: 0});
  return(
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      {isMessageSendingError &&
        <label style={{color:'red', display: 'flex'}}>При отправке сообщения возникла ошибка с сервером</label>}
      <div className="reviews__rating-form form__rating">
        {stars.map((item) => (<ReviewStar key={item.key} star={item} handleFieldChange={handleFieldChange} disabled={isMessageSending} checked={formData.rating} />))}
      </div>
      <textarea value={formData.review} onChange={handleFieldChange} disabled={isMessageSending} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" maxLength={MAX_REQURID_SYMBOL_COUNT}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_REQURID_SYMBOL_COUNT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!(formData.review.length >= MIN_REQURID_SYMBOL_COUNT && formData.rating) || isMessageSending}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
