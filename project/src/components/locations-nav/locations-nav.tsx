import {locations} from '../../mocks/locations';

function LocationsNav(): JSX.Element
{
  return(
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {locations.map((item) =>
          (
            <li key={item.key} className="locations__item">
              <a className={item.isActive ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href={item.url}>
                <span>{item.title}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default LocationsNav;
