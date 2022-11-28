import { OfferType } from '../../types/offer';
import Offer from '../offer/offer';
import { selectFilterCity } from '../../store/selector';
import { useSelector } from 'react-redux';
import OfferOrder from '../offer-order/offer-order';
import { Location } from '../../types/location';

type OffersListProps = {
  offerParameters: OfferType[];
  onMouseEnter: (location?:Location) => void;
}


function OffersList({offerParameters, onMouseEnter}:OffersListProps): JSX.Element
{
  const city = useSelector(selectFilterCity);
  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerParameters ? offerParameters.length : 0} places to stay {city ? 'in '.concat(city.name) : ''}</b>
      <OfferOrder />
      <div className="cities__places-list places__list tabs__content">
        {offerParameters.map((item) => <Offer key={item.id} offerParameter={item} onMouseEnter={onMouseEnter}/>)}
      </div>
    </section>
  );
}

export default OffersList;
