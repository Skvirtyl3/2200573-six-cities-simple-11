import OffersList from '../offers-list/offers-list';
import { ZOOM_MAP_GLOBAL } from '../../const';
import Map from '../map/map';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { selectFilterCity, selectFilterOffers } from '../../store/selector';
import { Location } from '../../types/location';
import Loading from '../../pages/loading/loading';
import { getSearchDataLoadingStatus } from '../../store/offer-search-data/selectors';
import { useAppSelector } from '../../hooks';


function MainOffersContainer(): JSX.Element
{
  function handleOfferMouseEnter(point: Location | undefined | null): void {
    setHover(point);
  }

  const city = useAppSelector(selectFilterCity);
  const offers = useAppSelector(selectFilterOffers);
  const isDataLoading = useAppSelector(getSearchDataLoadingStatus);

  const points = offers.flatMap((item) => item.location);

  const [hover, setHover] = useState(null as Location | undefined | null);

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
      <OffersList offerParameters={offers} onMouseEnter={handleOfferMouseEnter}/>
      <div className="cities__right-section">
        <section className="cities__map map" style={{backgroundImage: 'none'}}>
          <Map city={city} points={points} zoom={ZOOM_MAP_GLOBAL} hoveredPoint={hover} styleMap={StyleMap.Main}/>
        </section>
      </div>
    </div>);
}

export default MainOffersContainer;


