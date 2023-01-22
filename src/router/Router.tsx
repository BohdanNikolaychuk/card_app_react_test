import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './_Routes';

import { Home, Info } from '../page';
import { Layout } from '../components';
import Error from '../page/Error/Error';

export const router = createBrowserRouter([
  {
    path: ROUTES.articles,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        element: <Info />,
        path: ROUTES.article(),
        errorElement: <Error />,
      },
    ],
  },
]);
