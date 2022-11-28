import Header from '../../components/header/header';
import LocationsNav from '../../components/nav-locations/nav-locations';
import OffersList from '../../components/offers-list/offers-list';
import { ZOOM_MAP_GLOBAL } from '../../const';
import Map from '../../components/map/map';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { selectFilterCity, selectFilterOffers } from '../../store/selector';
import { useSelector } from 'react-redux';
import { Location } from '../../types/location';
import { Helmet } from 'react-helmet-async';


function Main(): JSX.Element
{
  function handleOfferMouseEnter(point: Location | undefined | null): void {
    setHover(point);
  }

  const city = useSelector(selectFilterCity);
  const offers = useSelector(selectFilterOffers);

  const points = offers.flatMap((item) => item.location);

  const [hover, setHover] = useState(null as Location | undefined | null);
  return(
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов. Поиск предложений.</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive isHaveHeaderNav/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsNav />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList offerParameters={offers} onMouseEnter={handleOfferMouseEnter}/>
            <div className="cities__right-section">
              <section className="cities__map map" style={{backgroundImage: 'none'}}>
                <Map city={city} points={points} zoom={ZOOM_MAP_GLOBAL} hoveredPoint={hover} styleMap={StyleMap.Main}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default Main;


