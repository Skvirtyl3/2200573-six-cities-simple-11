import { NEAR_PLACES_COUNT } from '../../const';
import { OfferInfo } from '../../types/offer';
import Offer from '../offer/offer';
import { Location } from '../../types/location';
import { setHoverOfferPoint } from '../../store/offer-search-process/offer-search-process';
import { useAppDispatch } from '../../hooks';


type OffersNearbyProps = {
  offerParameters: OfferInfo[];
  currentOfferId: number | undefined; //ид текущего отображаемого оффера, исключаем его из перечня, чтобы в блоке "Other places in the neighbourhood" он не отобразился
}

function OffersNearby({offerParameters, currentOfferId}:OffersNearbyProps) : JSX.Element
{
  const dispatch = useAppDispatch();

  function handleOfferMouseEnter(point: Location | undefined | null): void {
    dispatch(setHoverOfferPoint(point));
  }

  const offerNearby = offerParameters.filter((item) => item.id !== currentOfferId);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offerNearby.slice(0, NEAR_PLACES_COUNT).map((item) =>
          <Offer key={item.id} offerParameter={item} onMouseEnter={handleOfferMouseEnter} />
        )}
      </div>
    </section>
  );
}

export default OffersNearby;
