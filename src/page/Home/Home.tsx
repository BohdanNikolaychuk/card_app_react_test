import React from 'react';

//MUI
import { Container, Grid, Typography, Button } from '@mui/material';
//Component
import { Search } from '../../components';
import { MediaCard } from '../../components/Card/Card';
import { Loading } from '../../components';
import Error from '../Error/Error';
//Redux
import { selectActicleData } from '../../store/article/selector';
import { useAppDispatch } from '../../store/store';
import { useAppSelector } from '../../store/store';
import { FetchAllArticles } from '../../store/article/asyncAction';
//types
import { IArticle } from '../../@types/IArticle';
import { searchByTitleAndDisc } from '../../store/article/slice';

export const Home = React.memo(() => {
  const { article, status, filteredArticle, error } = useAppSelector(selectActicleData);

  const IsLoading = status === 'loading';

  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [CurrentCount, setCurrentCount] = React.useState(0);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!article.length) {
      dispatch(FetchAllArticles(CurrentCount));
    }
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(searchByTitleAndDisc(searchTerm));
  }, [searchTerm]);

  const changeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
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
        <Typography sx={{ mt: 1 }}>Result : {filteredArticle.length}</Typography>
        <hr />
        {IsLoading ? <Loading></Loading> : <></>}
        {error && <Error></Error>}
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {filteredArticle.map((article: IArticle) => (
            <Grid item xs={6} sm={4} md={4} key={article.id}>
              <MediaCard {...article}></MediaCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
});
