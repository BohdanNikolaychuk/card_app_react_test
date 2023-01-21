import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './_Routes';

import { Home, Info } from '../page';
import { Layout } from '../components';

export const router = createBrowserRouter([
  {
    path: ROUTES.articles,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Info />,
        path: ROUTES.article(),
      },
    ],
  },
]);
