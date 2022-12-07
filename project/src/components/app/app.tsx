import Main from '../../pages/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import Scroll from '../sroll/scroll';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';



function App(): JSX.Element {

  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);


  if (isDataLoading) {
    return (
      <Loading />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Scroll />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Main/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.RoomById}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <Room/>
              </PrivateRoute>
            }
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
