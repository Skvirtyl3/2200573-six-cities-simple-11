import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';

function PageNotFound(): JSX.Element
{
  return(
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов. Страница не найдена.</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive={false} isHaveHeaderNav/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
            <span>404 Not Found</span>
          </div>
        </div>
      </main>
    </div>);
}

export default PageNotFound;
