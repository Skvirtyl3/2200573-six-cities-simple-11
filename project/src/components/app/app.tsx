import Main from '../../pages/main/main';
import { Rating, RoomParameter, TypeRoom } from '../../types/room';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Room from '../../pages/room/room';
import Login from '../../pages/login/login';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

const roomParameters: RoomParameter[] =
[{
  key: 'a7209086-3a88-4f75-bd7c-adad06802251',
  isPremium: true,
  imgSrc: 'img/apartment-01.jpg',
  price: 120,
  isNight: true,
  rating: Rating.Four,
  name: 'Beautiful &amp; luxurious apartment at great location',
  type: TypeRoom.Apartment
},
{
  key: 'bd192257-2695-4f76-8814-4fe3490acc83',
  isPremium: false,
  imgSrc: 'img/room.jpg',
  price: 80,
  isNight: true,
  rating: Rating.Four,
  name: 'Wood and stone place',
  type: TypeRoom.PrivateRoom
},
{
  key: 'c7fad9ce-ffe1-4009-bb6b-f3448f241bc2',
  isPremium: false,
  imgSrc: 'img/apartment-02.jpg',
  price: 132,
  isNight: true,
  rating: Rating.Four,
  name: 'Canal View Prinsengracht',
  type: TypeRoom.Apartment
},
{
  key: '878c61a8-d1c0-4bb4-b797-6e8346075467',
  isPremium: true,
  imgSrc: 'img/apartment-03.jpg',
  price: 180,
  isNight: true,
  rating: Rating.Five,
  name: 'Nice, cozy, warm big bed apartment',
  type: TypeRoom.Apartment
},
{
  key: '6c253e7f-a5fe-4ec9-8d99-2d86f72cc308',
  isPremium: false,
  imgSrc: 'img/room.jpg',
  price: 80,
  isNight: true,
  rating: Rating.Four,
  name: 'Wood and stone place',
  type: TypeRoom.PrivateRoom
},
];

type AppProps = {
  settigCount: number;
}

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <Main settigCount={props.settigCount} roomParameters={roomParameters}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<Room />}
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
