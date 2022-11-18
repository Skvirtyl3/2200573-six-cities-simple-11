import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import LocationsNav from '../../components/nav-locations/nav-locations';
import OffersList from '../../components/offers-list/offers-list';
import { points } from '../../mocks/map';
import { ZOOM_MAP_GLOBAL } from '../../const';
import Map from '../../components/map/map';
import { useState } from 'react';
import { StyleMap } from '../../types/map';
import { useAppSelector } from '../../hooks';


function Main(): JSX.Element
{
  function handleOfferMouseEnter(id:string): void {
    setHover(id);
  }

  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);

  const [hover, setHover] = useState('');
  return(
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов. Поиск предложений.</title></Helmet>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>
      <Logo />
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
                <Map city={city} points={points} zoom={ZOOM_MAP_GLOBAL} hoveredPointKey={hover} styleMap={StyleMap.Main}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>);
}

export default Main;


