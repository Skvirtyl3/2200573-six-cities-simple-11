import Main from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { OfferParameter } from '../../types/offer';
import Scroll from '../sroll/scroll';


type AppProps = {
  offers: OfferParameter[];
}

function App({ offers}:AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Main offerParameters={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.RoomById}
            element={<Room offerParameters={offers}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
