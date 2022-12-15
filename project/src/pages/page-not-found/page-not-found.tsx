import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import './page-not-found.css';

function PageNotFound(): JSX.Element
{
  return(
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов. Страница не найдена.</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive={false} isHaveHeaderNav/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="page-not-found">
            <span>404 Not Found</span>
            <br />
            <Link to={AppRoute.Main} className="page-not-found__link">На главную страницу</Link>
          </div>
        </div>
      </main>
    </div>);
}

export default PageNotFound;
