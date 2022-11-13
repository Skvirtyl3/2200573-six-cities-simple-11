import { NEAR_PLACES_COUNT } from '../../const';
import { OfferParameter } from '../../types/offer';
import Offer from '../offer/offer';


type OffersOtherProps = {
  offerParameters: OfferParameter[];
  currentOfferKey: string; //ид текущего отображаемого оффера, исключаем его из перечня, чтобы в блоке "Other places in the neighbourhood" он не отобразился
  onMouseEnter: (id:string) => void;
}

function OffersOther({offerParameters, currentOfferKey, onMouseEnter}:OffersOtherProps) : JSX.Element
{
  const otherOffer = offerParameters.filter((item) => item.key !== currentOfferKey);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {otherOffer.slice(0, NEAR_PLACES_COUNT).map((item) =>
          <Offer key={item.key} offerParameter={item} onMouseEnter={onMouseEnter} />
        )}
      </div>
    </section>
  );
}

export default OffersOther;
