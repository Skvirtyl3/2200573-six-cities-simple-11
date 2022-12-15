import {City} from '../../types/city';
import { selectFilterCity } from '../../store/selector';
import { useAppSelector } from '../../hooks';
import classNames from 'classnames';
import './nav-location.css';

type NavLocationProp = {
  location: City;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function NavLocation({location, onClick}:NavLocationProp): JSX.Element
{
  const city = useAppSelector(selectFilterCity);
  const isActive = city && location.name === city.name;
  const classButton = classNames('locations__item-link tabs__item',
    {'tabs__item--active locations__button-active':isActive},
    {'locations__button-not-active':!isActive});
  return(
    <li className="locations__item">
      <button onClick={(event) => {onClick(event);}} className={classButton} value={location.name}>
        <span>{location.name}</span>
      </button>
    </li>
  );
}

export default NavLocation;
