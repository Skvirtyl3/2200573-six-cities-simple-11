import { NEAR_PLACES_COUNT } from '../../const';
import { OfferInfo } from '../../types/offer';
import Offer from '../offer/offer';
import { Location } from '../../types/location';


type OffersNearbyProps = {
  offerParameters: OfferInfo[];
  currentOfferId: number | undefined; //ид текущего отображаемого оффера, исключаем его из перечня, чтобы в блоке "Other places in the neighbourhood" он не отобразился
  onMouseEnter: (location?:Location) => void;
}

function OffersNearby({offerParameters, currentOfferId, onMouseEnter}:OffersNearbyProps) : JSX.Element
{
  const offerNearby = offerParameters.filter((item) => item.id !== currentOfferId);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offerNearby.slice(0, NEAR_PLACES_COUNT).map((item) =>
          <Offer key={item.id} offerParameter={item} onMouseEnter={onMouseEnter} />
        )}
      </div>
    </section>
  );
}

export default OffersNearby;
