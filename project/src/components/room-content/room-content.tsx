import { Fragment } from 'react';
import Gallery from '../../components/gallery/gallery';
import OffersNearby from '../../components/offers-nearby/offers-nearby';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { REVIEW_ITEMS_COUNT, ZOOM_MAP_ROOM } from '../../const';
import { GetRatingStileByNumber, Pluralize } from '../../helpers/helpers';
import { StyleMap } from '../../types/map';
import { useAppSelector } from '../../hooks';
import { getComments, getCurrentOffer, getErrorStatus, getOffersNearby, getRoomDataLoadingStatus } from '../../store/offer-room-data/selectors';
import {Comment} from '../../types/review';
import classNames from 'classnames';
import RoomErrorScreen from '../room-error-screen/room-error-screen';
import Loading from '../../pages/loading/loading';

type RoomContentProp = {
  offerId: number;
}

function RoomContent({offerId}: RoomContentProp) : JSX.Element
{
  const currentOffer = useAppSelector(getCurrentOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const comments = useAppSelector(getComments);
  const isDataLoading = useAppSelector(getRoomDataLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  const points = offersNearby.flatMap((item) => item.location);
  if(currentOffer)
  {
    points.push(currentOffer.location);
  }

  const commentsList = comments.slice().sort((a: Comment, b: Comment) => new Date(a.date) < new Date(b.date) ? 1 : -1).slice(0, REVIEW_ITEMS_COUNT);

  let userClass = 'property__avatar-wrapper user__avatar-wrapper';
  if(currentOffer)
  {
    userClass = classNames('property__avatar-wrapper user__avatar-wrapper', {
      'property__avatar-wrapper--pro ': currentOffer.host.isPro
    });
  }
  const ratingWidth: string = currentOffer ? GetRatingStileByNumber(currentOffer.rating) : '0%';

  if (isDataLoading) {
    return (
      <Loading />
    );
  }

  if (hasError) {
    return (
      <RoomErrorScreen offerId={offerId}/>);
  }

  return(
    <main className="page__main page__main--property">
      {
        currentOffer &&
        <Fragment>
          <section className="property">
            <Gallery images={currentOffer.images}/>
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
                    {Pluralize(currentOffer.bedrooms, 'Bedroom')}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {Pluralize(currentOffer.maxAdults, 'adult')}
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
                        <div className={userClass}>
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
                <Reviews comments={commentsList} offerId={offerId}/>
              </div>
            </div>
            <section className="property__map map" style={{backgroundImage: 'none'}}>
              <Map city={currentOffer.city} points={points} selectedPoint={currentOffer.location} zoom={ZOOM_MAP_ROOM} styleMap={StyleMap.Room}/>
            </section>
          </section>
          <div className="container">
            <OffersNearby offerParameters={offersNearby} currentOfferId={offerId}/>
          </div>
        </Fragment>
      }
    </main>
  );
}

export default RoomContent;
