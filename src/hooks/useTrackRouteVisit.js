import { useEffect } from 'react';
import { useAppDispatch } from '../state/useAppState';

export function useTrackRouteVisit(routeKey) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: 'TRACK_ROUTE_VISIT',
      payload: routeKey,
    });
  }, [dispatch, routeKey]);
}
