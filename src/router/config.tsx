import HomePage from '../pages/home/page';
import LocationPage from '../pages/location/page';
import PharmacyServicesPage from '../pages/pharmacy-services/page';
import AddictionServicesPage from '../pages/addiction-services/page';
import PrivacyPolicy from '../pages/privacy/page';
import NotFound from '../pages/NotFound';
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/location',
    element: <LocationPage />,
  },
  {
    path: '/pharmacy-services',
    element: <PharmacyServicesPage />,
  },
  {
    path: '/addiction-services',
    element: <AddictionServicesPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
