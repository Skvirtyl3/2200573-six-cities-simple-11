import classNames from 'classnames';
import { OrderOffers } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setOrderOffers } from '../../store/action';
import { useEffect, useState } from 'react';


function OfferOrder() : JSX.Element
{
  const dispatch = useAppDispatch();

  const currentOrderKey = useAppSelector((state) => state.orderOffer);
  const currenOrder = OrderOffers.find((item) => item.key === currentOrderKey);
  const [showForm, setShowForm] = useState(false);

  function handleOrderClick(e: React.MouseEvent<HTMLLIElement>): void {
    e.preventDefault();
    const {value} = e.currentTarget;
    dispatch(setOrderOffers(value));
    setShowForm(false);
  }

  function handleSpanClick(e: React.MouseEvent<HTMLSpanElement>): void {
    e.preventDefault();
    const value = showForm;
    setShowForm(!value);
  }

  useEffect(() => {
    const handleDocumentClick = (evt: MouseEvent) => {
      const target = evt.target as Element;

      if (showForm && (!target.closest('.places__sorting-type') && !target.closest('.places__options'))) {
        evt.preventDefault();

        setShowForm(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showForm]);


  useEffect(() => {
    const handleDocumentClick = (evt: MouseEvent) => {
      const target = evt.target as Element;

      if (showForm && (!target.closest('.places__sorting-type') && !target.closest('.places__options'))) {
        evt.preventDefault();

        setShowForm(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showForm]);


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
        showForm &&
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
