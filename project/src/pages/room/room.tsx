import { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery/gallery';
import Header from '../../components/header/header';
import OffersNearby from '../../components/offers-nearby/offers-nearby';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { ZOOM_MAP_ROOM } from '../../const';
import { GetRatingStileByNumber } from '../../helpers/rating';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { Location } from '../../types/location';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchHotelAction, fetchHotelsNearbyAction } from '../../store/api-actions';
import { setComments, setCurrentOffer, setDataLoadingStatus, setOffersNearby } from '../../store/action';
import PageNotFound from '../page-not-found/page-not-found';


function Room() : JSX.Element
{
  const currentOffer = useAppSelector((state) => state.currentOffer);
  const nearbyOffers = useAppSelector((state) => state.offersNearby);
  const comments = useAppSelector((state) => state.comments);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const [hover, setHover] = useState(null as Location | undefined | null);
  const {id} = useParams();
  const offerId = Number(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(offerId)
    {
      dispatch(setDataLoadingStatus(true));
      dispatch(fetchHotelAction(offerId));
      dispatch(fetchHotelsNearbyAction(offerId));
      dispatch(fetchCommentsAction(offerId));
      dispatch(setDataLoadingStatus(false));
    }

    return () =>
    {
      dispatch(setCurrentOffer(undefined));
      dispatch(setOffersNearby([]));
      dispatch(setComments([]));
    };
  }, [dispatch, offerId]);

  const points = nearbyOffers.flatMap((item) => item.location);
  if(currentOffer)
  {
    points.push(currentOffer.location);
  }
  else
  {
    if(!isDataLoading)
    {
      return <PageNotFound/>;
    }
  }


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
                <Reviews comments={comments}/>
              </div>
            </div>
            <section className="property__map map" style={{backgroundImage: 'none'}}>
              <Map city={currentOffer.city} points={points} selectedPoint={currentOffer.location} hoveredPoint={hover} zoom={ZOOM_MAP_ROOM} styleMap={StyleMap.Room}/>
            </section>
          </section>
        }
        <div className="container">
          <OffersNearby offerParameters={nearbyOffers} currentOfferId={offerId} onMouseEnter={handleOfferMouseEnter}/>
        </div>
      </main>
    </div>
  );
}

export default Room;
