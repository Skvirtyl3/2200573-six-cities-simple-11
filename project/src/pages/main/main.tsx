import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import MainContent from '../../components/main-content/main-content';


function Main(): JSX.Element
{
  return(
    <div className="page page--gray page--main">
      <Helmet><title>Шесть городов. Поиск предложений.</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive isHaveHeaderNav/>
      <MainContent />
    </div>);
}

export default Main;


