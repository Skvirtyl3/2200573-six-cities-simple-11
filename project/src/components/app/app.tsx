import Main from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Scroll from '../sroll/scroll';
import { useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { getCitys, getOffers } from '../../store/action';


function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCitys());
    dispatch(getOffers());
  });

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Main/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.RoomById}
            element={<Room/>}
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
