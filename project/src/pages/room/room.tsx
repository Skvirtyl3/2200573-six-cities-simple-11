import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery/gallery';
import Logo from '../../components/logo/logo';
import OffersOther from '../../components/offers-other/offers-other';
import Reviews from '../../components/reviews/reviews';
import { points } from '../../mocks/map';
import Map from '../../components/map/map';
import { ZOOM_MAP_ROOM } from '../../const';
import { GetRatingStileByNumber } from '../../helpers/rating';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { selectFilterCity, selectFilterOffers } from '../../store/selector';
import { useSelector } from 'react-redux';
import { Location } from '../../types/location';


function Room() : JSX.Element
{

  const city = useSelector(selectFilterCity);
  const offers = useSelector(selectFilterOffers);

  const param = useParams();
  const currentOffer = offers.find((item) => item.id.toString() === param.id);

  let titleHelmet = 'Шесть городов.';
  if(currentOffer !== undefined)
  {
    titleHelmet = (typeof(param.id) === 'string' ? titleHelmet.concat(' ',currentOffer.title ,'.') : titleHelmet );
  }
  const ratingWidth: string = currentOffer ? GetRatingStileByNumber(currentOffer.rating) : '0%';

  function handleOfferMouseEnter(point:Location | undefined | null): void {
    setHover(point);
  }

  const [hover, setHover] = useState(null as Location | undefined | null);
  return(
    <div className="page">
      <Helmet><title>{titleHelmet}</title></Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <Logo />
      <main className="page__main page__main--property">
        {
          currentOffer &&
          <section className="property">
            <Gallery />
            <div className="property__container container">
              <div className="property__wrapper">
                {
                  currentOffer.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ratingWidth}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                {
                  currentOffer.goods && currentOffer.goods.length > 0 &&
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {
                        currentOffer.goods.map((item) =>
                          (
                            <li key={item} className="property__inside-item">
                              {item}
                            </li>
                          )
                        )
                      }
                    </ul>
                  </div>
                }
                <div className="property__host">
                  {
                    currentOffer && currentOffer.host &&
                    <Fragment>
                      <h2 className="property__host-title">Meet the host</h2>
                      <div className="property__host-user user">
                        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                          <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                        </div>
                        <span className="property__user-name">
                          {currentOffer.host.name}
                        </span>
                        {currentOffer.host.isPro &&
                          <span className="property__user-status">
                            Pro
                          </span>}
                      </div>
                    </Fragment>
                  }
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <Reviews />
              </div>
            </div>
            <section className="property__map map" style={{backgroundImage: 'none'}}>
              <Map city={city} points={points} selectedPoint={currentOffer.location} hoveredPoint={hover} zoom={ZOOM_MAP_ROOM} styleMap={StyleMap.Room}/>
            </section>
          </section>
        }
        <div className="container">
          <OffersOther offerParameters={offers} currentOfferId={currentOffer && currentOffer.id} onMouseEnter={handleOfferMouseEnter}/>
        </div>
      </main>
    </div>
  );
}

export default Room;
