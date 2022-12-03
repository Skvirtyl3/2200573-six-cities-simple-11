import { OfferInfo } from '../../types/offer';
import Offer from '../offer/offer';
import { selectFilterCity } from '../../store/selector';
import OfferOrder from '../offer-order/offer-order';
import { Location } from '../../types/location';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setHoverOfferPoint } from '../../store/offer-search-process/offer-search-process';
import { fetchHotelsAction } from '../../store/api-actions';
import { getErrorStatus } from '../../store/offer-search-data/selectors';
import ErrorScreen from '../error-screen/error-screen';

type OffersListProps = {
  offerParameters: OfferInfo[];
}

function OffersList({offerParameters}:OffersListProps): JSX.Element
{
  const hasError = useAppSelector(getErrorStatus);
  const dispatch = useAppDispatch();
  const city = useAppSelector(selectFilterCity);

  function handleOfferMouseEnter(point: Location | undefined | null): void {
    dispatch(setHoverOfferPoint(point));
  }

  if (hasError) {
    return (
      <ErrorScreen errorText='Не удалось загрузить информацию по списку предложений' onClick={() => {
        dispatch(fetchHotelsAction());
      }}
      />);
  }

  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offerParameters ? offerParameters.length : 0} places to stay {city ? 'in '.concat(city.name) : ''}</b>
      <OfferOrder />
      <div className="cities__places-list places__list tabs__content">
        {offerParameters.map((item) => <Offer key={item.id} offerParameter={item} onMouseEnter={handleOfferMouseEnter}/>)}
      </div>
    </section>
  );
}

export default OffersList;
