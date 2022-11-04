import { OfferParameter } from '../../types/offer';
import Card from '../offer/offer';
import {useState} from 'react';

type OffersListProps = {
  settigCount: number;
  offerParameters: OfferParameter[];
}

const OffersListState = {
  focus: ''
};


function OffersList({settigCount, offerParameters}:OffersListProps): JSX.Element
{
  const [focus, setFocus] = useState(OffersListState);
  //eslint-disable-next-line
  console.log('Активный оффер:'.concat(focus && focus.focus));
  return(
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{settigCount} places to stay in Amsterdam</b>
      <form className="places__sorting" action="\#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offerParameters.map((item) => <Card key={item.key} offerParameter={item} onMouseEnter={(id:string) => setFocus({...focus, focus: id})}/>)}
      </div>
    </section>
  );
}

export default OffersList;
