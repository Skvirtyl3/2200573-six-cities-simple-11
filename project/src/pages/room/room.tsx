import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchHotelAction, fetchHotelsNearbyAction } from '../../store/api-actions';
import { cleareData } from '../../store/offer-room-data/offer-room-data';
import PageNotFound from '../page-not-found/page-not-found';
import { getCurrentOffer, getRoomDataLoadingStatus } from '../../store/offer-room-data/selectors';
import RoomContent from '../../components/room-content/room-content';


function Room() : JSX.Element
{
  const currentOffer = useAppSelector(getCurrentOffer);
  const isDataLoading = useAppSelector(getRoomDataLoadingStatus);
  const {id} = useParams();
  const offerId = Number(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(offerId)
    {
      dispatch(fetchHotelAction(offerId));
      dispatch(fetchHotelsNearbyAction(offerId));
      dispatch(fetchCommentsAction(offerId));
    }

    return () =>
    {
      dispatch(cleareData());
    };
  }, [dispatch, offerId]);

  if(!currentOffer && !isDataLoading)
  {
    return <PageNotFound/>;
  }

  let titleHelmet = 'Шесть городов.';
  if(currentOffer)
  {
    titleHelmet = (typeof(id) === 'string' ? titleHelmet.concat(' ',currentOffer.title ,'.') : titleHelmet );
  }

  return(
    <div className="page">
      <Helmet><title>{titleHelmet}</title></Helmet>
      <Header isNumberCitiesLogo isLogoLinkActive={false} isHaveHeaderNav/>
      <RoomContent offerId={offerId}/>
    </div>
  );
}

export default Room;
