import React from 'react';

//MUI
import { Container, Grid, Typography } from '@mui/material';
//Component
import { Search } from '../../components';
import MediaCard from '../../components/Card/Card';
import { Loading } from '../../components/Loading/Loading';
//Redux
import { selectActicleData } from '../../store/article/selector';
import { useAppDispatch } from '../../store/store';
import { useAppSelector } from '../../store/store';
import { FetchAllArticles } from '../../store/article/asyncAction';
import { searchByTitle } from '../../store/article/slice';

export const Home = () => {
  const { acticle, status, filteredUsers } = useAppSelector(selectActicleData);
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!acticle.length) {
      dispatch(FetchAllArticles());
    }
  }, []);

  React.useEffect(() => {
    dispatch(searchByTitle(searchTerm));
  }, [searchTerm, dispatch]);

  const changeSearchTerm = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
        Filter by keywords
      </Typography>

      <Search onChange={changeSearchTerm} value={searchTerm}></Search>
      <Typography sx={{ mt: 1 }}>Result : {acticle.length}</Typography>
      <hr />
      {status === 'loading' ? <Loading></Loading> : <></>}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredUsers.map((element: any) => (
          <Grid item xs={6} sm={4} md={4} key={element.id}>
            <MediaCard {...element}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
