import LocationsNav from '../../components/nav-locations/nav-locations';
import MainOffersContainer from '../main-offers-container/main-offers-container';

function MainContent(): JSX.Element
{
  return(
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsNav />
      </div>
      <div className="cities">
        <MainOffersContainer />
      </div>
    </main>);
}

export default MainContent;


