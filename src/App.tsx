import React from 'react';

import { useAppDispatch, useAppSelector } from './store/store';

import { FetchAllArticles } from './store/article/asyncAction';
import { selectActicleData } from './store/article/selector';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

function App() {
  const dispatch = useAppDispatch();
  const { acticle } = useAppSelector(selectActicleData);
  React.useEffect(() => {
    dispatch(FetchAllArticles());
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
