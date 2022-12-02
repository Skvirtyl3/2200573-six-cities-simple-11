import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import OffersNearby from '../../components/offers-nearby/offers-nearby';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { REVIEW_ITEMS_COUNT, ZOOM_MAP_ROOM } from '../../const';
import { GetRatingStileByNumber, Pluralize } from '../../helpers/helpers';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { Location } from '../../types/location';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchHotelAction, fetchHotelsNearbyAction } from '../../store/api-actions';
import { cleareData } from '../../store/offer-room-data/offer-room-data';
import PageNotFound from '../page-not-found/page-not-found';
import { getComments, getCurrentOffer, getOffersNearby, getRoomDataLoadingStatus } from '../../store/offer-room-data/selectors';
import Loading from '../loading/loading';
import {Comment} from '../../types/review';


function Room() : JSX.Element
{
  const currentOffer = useAppSelector(getCurrentOffer);
  const offersNearby = useAppSelector(getOffersNearby);
  const comments = useAppSelector(getComments);
  const isDataLoading = useAppSelector(getRoomDataLoadingStatus);
  const [hover, setHover] = useState(null as Location | undefined | null);
  const {id} = useParams();
  const offerId = Number(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(offerId)
    {
      dispatch(fetchHotelAction(offerId));
      dispatch(fetchHotelsNearbyAction(offerId));
      dispatch(fetchCommentsAction(offerId));
    }

    return () =>
    {
      dispatch(cleareData());
    };
  }, [dispatch, offerId]);

  if (isDataLoading) {
    return (
      <Loading />
    );
  }

  const points = offersNearby.flatMap((item) => item.location);
  if(currentOffer)
  {
    points.push(currentOffer.location);
  }
  else
  {
    return <PageNotFound/>;
  }

  const commentsList = comments.slice().sort((a: Comment, b: Comment) => new Date(a.date) < new Date(b.date) ? 1 : -1).slice(0, REVIEW_ITEMS_COUNT);

  let titleHelmet = 'Шесть городов.';
  if(currentOffer !== undefined)
  {
    titleHelmet = (typeof(id) === 'string' ? titleHelmet.concat(' ',currentOffer.title ,'.') : titleHelmet );
  }
  const ratingWidth: string = currentOffer ? GetRatingStileByNumber(currentOffer.rating) : '0%';

  function handleOfferMouseEnter(point:Location | undefined | null): void {
    setHover(point);
  }

  return(
    <div className="page">
      <Helmet><title>{titleHelmet}</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive={false} isHaveHeaderNav/>
      <main className="page__main page__main--property">
        {
          currentOffer &&
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
                <Reviews comments={commentsList} offerId={offerId}/>
              </div>
            </div>
            <section className="property__map map" style={{backgroundImage: 'none'}}>
              <Map city={currentOffer.city} points={points} selectedPoint={currentOffer.location} hoveredPoint={hover} zoom={ZOOM_MAP_ROOM} styleMap={StyleMap.Room}/>
            </section>
          </section>
        }
        <div className="container">
          <OffersNearby offerParameters={offersNearby} currentOfferId={offerId} onMouseEnter={handleOfferMouseEnter}/>
        </div>
      </main>
    </div>
  );
}

export default Room;
