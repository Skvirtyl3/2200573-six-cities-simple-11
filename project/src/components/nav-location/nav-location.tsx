import {City} from '../../types/city';
import { selectFilterCity } from '../../store/selector';
import { useAppSelector } from '../../hooks';

type NavLocationProp = {
  location: City;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function NavLocation({location, onClick}:NavLocationProp): JSX.Element
{
  const city = useAppSelector(selectFilterCity);
  const isActive = city && location.name === city.name;
  const styleActive = {border: 'none'};
  const styleNotActive = {backgroundColor: 'transparent', border: 'none'};
  return(
    <li className="locations__item">
      <button style={isActive ? styleActive : styleNotActive} onClick={(event) => {onClick(event);}} className={isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} value={location.name}>
        <span>{location.name}</span>
      </button>
    </li>
  );
}

export default NavLocation;
