import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import LoginForm from '../../components/login-form/login-form';
import {AppRoute, citys} from '../../const';
import { GetRandomElement } from '../../helpers/helpers';
import { useAppDispatch } from '../../hooks';
import { setCurrentCity } from '../../store/offer-search-process/offer-search-process';

function Login() : JSX.Element
{
  const city = GetRandomElement(citys);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    dispatch(setCurrentCity(city.name));
    navigate(AppRoute.Main);
  }

  return(
    <div className="page page--gray page--login">
      <Helmet><title>Шесть городов. Авторизация.</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive={false} isHaveHeaderNav={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm/>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" onClick={handleAnchorClick} to={''}>
                <span>{city.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
