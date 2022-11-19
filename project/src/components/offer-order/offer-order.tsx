import classNames from 'classnames';
import { OrderOffers } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setOrderOffers } from '../../store/action';
import {useState} from 'react';

function OfferOrder() : JSX.Element
{
  const dispatch = useAppDispatch();

  function handleOrderClick(e: React.MouseEvent<HTMLLIElement>): void {
    const {value} = e.currentTarget;
    dispatch(setOrderOffers(value));
    setFormData({
      ...formData,
      showOrderList: false,
    });
  }

  function handleSpanClick(e: React.MouseEvent<HTMLSpanElement>): void {
    const value = formData.showOrderList;
    setFormData({
      ...formData,
      showOrderList: !value,
    });
  }


  const currentOrderKey = useAppSelector((state) => state.orderOffer);
  const currenOrder = OrderOffers.find((item) => item.key === currentOrderKey);
  const [formData, setFormData] = useState({showOrderList:false});

  return(
    <div className="places__sorting">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSpanClick}>
        {currenOrder && currenOrder.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        formData.showOrderList &&
        <ul className="places__options places__options--custom places__options--opened">
          {OrderOffers.map((item) =>
          {
            const isActive = item.key === currentOrderKey;
            const className = classNames('places__option', { 'places__option--active':isActive});
            return <li onClick={handleOrderClick} key={item.key} className={className} value={item.key} tabIndex={0}>{item.title}</li>;
          })}
        </ul>
      }
    </div>
  );
}

export default OfferOrder;
