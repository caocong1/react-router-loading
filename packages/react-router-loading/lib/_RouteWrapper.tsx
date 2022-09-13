/* eslint-disable camelcase */
import React, { useMemo, FC } from 'react';
import { Location, NavigationType, UNSAFE_LocationContext, useRoutes } from 'react-router';
import { LoadingRouteObject } from './utils';

interface RouteWrapperProps {
  routes: LoadingRouteObject[];
  location: Location;
  navigationType: NavigationType;
  hidden?: boolean;
}

export const RouteWrapper: FC<RouteWrapperProps> = ({ routes, location, navigationType, hidden }) => {
  const element = useRoutes(routes, location);

  return <div style={hidden ? { visibility: 'hidden' } : undefined}>
    {useMemo(
      () => <UNSAFE_LocationContext.Provider value={{ location, navigationType }}>
        {element}
      </UNSAFE_LocationContext.Provider>,
      [location]
    )}
  </div>;
};
