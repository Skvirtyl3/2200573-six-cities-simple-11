import { Link } from 'react-router-dom';
import { OfferParameter } from '../../types/offer';
import { AppRoute } from '../../const';
import { GetRatingStileByNumber } from '../../helpers/rating';

type OfferProps = {
  offerParameter: OfferParameter;
  onMouseEnter?: (id:string) => void;
}

function Offer(props:OfferProps): JSX.Element
{
  const {offerParameter: roomParameter} = props;
  const ratingWidth: string = GetRatingStileByNumber(roomParameter.rating);
  return(
    <article
      onMouseEnter={(event) => {
        props.onMouseEnter && props.onMouseEnter(props.offerParameter && props.offerParameter.key);
      }}
      className="cities__card place-card"
    >
      {roomParameter.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room.concat('/', props.offerParameter && props.offerParameter.key)} >
          <img className="place-card__image" src={roomParameter.imgSrc} width="260" height="200" alt="Place imаge" />
        </Link>
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

export default Offer;
