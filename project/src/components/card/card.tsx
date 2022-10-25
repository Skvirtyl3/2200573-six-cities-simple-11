type CardProps = {
  isPremium: boolean;
  imgSrc: string;
  price: number;
  isNight: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  name: string;
  type: 'Private room' | 'Apartment';
}

function Card(props:CardProps): JSX.Element
{
  const ratingWidth: string = (props.rating * 20).toString().concat('%');
  return(
    <article className="cities__card place-card">
      {props.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="\#">
          <img className="place-card__image" src={props.imgSrc} width="260" height="200" alt="Place imаge" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{props.isNight ? 'night' : ''}</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingWidth}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="\#">{props.name}</a>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>);}

export default Card;
