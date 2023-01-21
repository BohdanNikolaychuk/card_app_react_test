import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../store/store';

export const Info = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();
  const [InfoData, setInfoData] = React.useState(null);

  React.useEffect(() => {}, []);

  // dispatch(FetchByIDArticle(articleId!))
  //   .unwrap()
  //   .then((res) => setInfoData(res));

  return (
    <div>
      {articleId}

      <Link to="/"> Got back</Link>
    </div>
  );
};
