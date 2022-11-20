import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offer';
import { AppRoute } from '../../const';
import { GetRatingStileByNumber } from '../../helpers/rating';
import { Location } from '../../types/location';

type OfferProps = {
  offerParameter: OfferType;
  onMouseEnter?: (location?:Location) => void;
}

function Offer(props:OfferProps): JSX.Element
{
  const {offerParameter: roomParameter} = props;
  const ratingWidth: string = GetRatingStileByNumber(roomParameter.rating);
  return(
    <article
      onMouseEnter={(event) => {
        props.onMouseEnter && props.onMouseEnter(props.offerParameter && props.offerParameter.location);
      }}
      className="cities__card place-card"
      onMouseLeave={(event) => {
        props.onMouseEnter && props.onMouseEnter();
      }}
    >
      {roomParameter.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room.concat('/', props.offerParameter && props.offerParameter.id.toString() )} >
          <img className="place-card__image" src={roomParameter.previewImage} width="260" height="200" alt="Place imаge" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{roomParameter.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="\#">{roomParameter.title}</a>
        </h2>
        <p className="place-card__type">{roomParameter.type}</p>
      </div>
    </article>);}

export default Offer;
