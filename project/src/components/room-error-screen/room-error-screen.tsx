import {useAppDispatch} from '../../hooks';
import {fetchCommentsAction, fetchHotelAction, fetchHotelsNearbyAction} from '../../store/api-actions';

type RoomContentProp = {
  offerId: number;
}

function RoomErrorScreen({offerId}: RoomContentProp): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <main className="page__main page__main--property">
      <div style={{marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <p>Не удалось загрузить информацию по предложению</p>
        <button style={{color: '#fff', backgroundColor: '#4481c3', borderRadius: '4px'}}
          onClick={() => {
            dispatch(fetchHotelAction(offerId));
            dispatch(fetchHotelsNearbyAction(offerId));
            dispatch(fetchCommentsAction(offerId));
          }}
          type="button"
        >
          Попробовать ещё раз
        </button>
      </div>
    </main>
  );
}

export default RoomErrorScreen;
