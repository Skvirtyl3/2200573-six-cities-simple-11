import {citys} from '../../const';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/action';
import NavLocation from '../nav-location/nav-location';


function NavLocations(): JSX.Element
{
  const dispatch = useAppDispatch();
  function handleClick(e: React.MouseEvent<HTMLButtonElement>): void {
    const {value} = e.currentTarget;

    dispatch(setCurrentCity(value));
  }

  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {citys.map((item) =>
          <NavLocation key={item.name} location={item} onClick={handleClick}/>
        )}
      </ul>
    </section>
  );
}

export default NavLocations;
