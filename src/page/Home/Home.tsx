import React from 'react';

//MUI
import { Container, Grid, Typography } from '@mui/material';
//Component
import { Search } from '../../components';
import MediaCard from '../../components/Card/Card';
import { Loading } from '../../components';
//Redux
import { selectActicleData } from '../../store/article/selector';
import { useAppDispatch } from '../../store/store';
import { useAppSelector } from '../../store/store';
import { FetchAllArticles } from '../../store/article/asyncAction';
import { searchByTitle } from '../../store/article/slice';
import Error from '../Error/Error';

export const Home = () => {
  const { acticle, status, filteredUsers, error } = useAppSelector(selectActicleData);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const dispatch = useAppDispatch();
  const IsLoading = status === 'loading';
  React.useEffect(() => {
    if (!acticle.length) {
      dispatch(FetchAllArticles());
    }
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(searchByTitle(searchTerm));
  }, [searchTerm, dispatch]);

  const changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" sx={{ mb: 2, mt: 4 }}>
        Filter by keywords
      </Typography>
      <Container maxWidth="xs">
        <Search
          onChange={changeSearchTerm}
          value={searchTerm}
          lable={'"The most successful article in 2023"'}></Search>
      </Container>
      <Typography sx={{ mt: 1 }}>Result : {filteredUsers.length}</Typography>
      <hr />
      {IsLoading ? <Loading></Loading> : <></>}
      {error && <Error></Error>}
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {filteredUsers.map((element: any) => (
          <Grid item xs={6} sm={4} md={4} key={element.id}>
            <MediaCard {...element} value={searchTerm} higlight={searchTerm}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
