import { OfferParameter } from '../../types/offer';
import Offer from '../offer/offer';
import { selectFilterCity } from '../../store/selector';
import { useSelector } from 'react-redux';
import OfferOrder from '../offer-order/offer-order';

type OffersListProps = {
  offerParameters: OfferParameter[];
  onMouseEnter: (id:string) => void;
}


function OffersList({offerParameters, onMouseEnter}:OffersListProps): JSX.Element
{
  const city = useSelector(selectFilterCity);
  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerParameters ? offerParameters.length : 0} places to stay {city ? 'in '.concat(city.title) : ''}</b>
      <OfferOrder />
      <div className="cities__places-list places__list tabs__content">
        {offerParameters.map((item) => <Offer key={item.key} offerParameter={item} onMouseEnter={onMouseEnter}/>)}
      </div>
    </section>
  );
}

export default OffersList;
