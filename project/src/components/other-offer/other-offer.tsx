import { OfferParameter } from '../../types/offer';
import Offer from '../offer/offer';

const Setting = {
  Count:  3 //сколько офферов мы показываем в "предложениях"
} as const;

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
        {otherOffer.slice(0, Setting.Count).map((item, index) =>
          <Offer key={item.key} offerParameter={item} />
        )}
      </div>
    </section>
  );
}

export default OtherOffer;
