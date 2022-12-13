import OffersList from '../offers-list/offers-list';
import { ZOOM_MAP_GLOBAL } from '../../const';
import Map from '../map/map';
import { StyleMap } from '../../types/map';
import { selectFilterCity, selectFilterOffers } from '../../store/selector';
import Loading from '../../pages/loading/loading';
import { getSearchDataLoadingStatus } from '../../store/offer-search-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { setHoverOfferPoint } from '../../store/offer-search-process/offer-search-process';


function MainOffersContainer(): JSX.Element
{
  const city = useAppSelector(selectFilterCity);
  const offers = useAppSelector(selectFilterOffers);
  const isDataLoading = useAppSelector(getSearchDataLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHoverOfferPoint(undefined));
  });

  const points = offers.flatMap((item) => item.location);

  if (isDataLoading) {
    return (
      <Loading />
    );
  }

  if(offers.length === 0)
  {
    return(
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
          </div>
        </section>
        <div className="cities__right-section"></div>
      </div>);
  }

  return(
    <div className="cities__places-container container">
      <OffersList offerParameters={offers}/>
      <div className="cities__right-section">
        <section className="cities__map map" style={{backgroundImage: 'none'}}>
          <Map city={city} points={points} zoom={ZOOM_MAP_GLOBAL} styleMap={StyleMap.Main}/>
        </section>
      </div>
    </div>);
}

export default MainOffersContainer;


