import { NEAR_PLACES_COUNT } from '../../const';
import { OfferParameter } from '../../types/offer';
import Offer from '../offer/offer';


type OtherOfferProps = {
  offerParameters: OfferParameter[];
  currentOfferKey: string; //ид текущего отображаемого оффера, исключаем его из перечня, чтобы в блоке "Other places in the neighbourhood" он не отобразился
}

function OtherOffer({offerParameters,currentOfferKey}:OtherOfferProps) : JSX.Element
{
  const otherOffer = offerParameters.filter((item) => item.key !== currentOfferKey);
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {otherOffer.slice(0, NEAR_PLACES_COUNT).map((item) =>
          <Offer key={item.key} offerParameter={item} />
        )}
      </div>
    </section>
  );
}

export default OtherOffer;
