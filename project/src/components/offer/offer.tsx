import { OfferParameter } from '../../types/offer';

type CardProps = {
  offerParameter: OfferParameter;
}

function Card(props:CardProps): JSX.Element
{
  const {offerParameter: roomParameter} = props;
  const ratingWidth: string = (roomParameter.rating * 20).toString().concat('%');
  return(
    <article className="cities__card place-card">
      {roomParameter.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="\#">
          <img className="place-card__image" src={roomParameter.imgSrc} width="260" height="200" alt="Place imаge" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{roomParameter.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{roomParameter.isNight ? 'night' : ''}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="\#">{roomParameter.name}</a>
        </h2>
        <p className="place-card__type">{roomParameter.type}</p>
      </div>
    </article>);}

export default Card;
