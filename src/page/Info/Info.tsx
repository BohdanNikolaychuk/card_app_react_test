import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
// MUI
import { Button, Typography, Container, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// types

//page
import Error from '../Error/Error';

//redux

import { useAppDispatch, useAppSelector } from '../../store/store';
import { selectActicleData } from '../../store/article/selector';
import { FetchByIDArticle } from '../../store/article/asyncAction';
import { Loading } from '../../components';

export const Info = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();
  const { arcticleByID, status, error } = useAppSelector(selectActicleData);
  const IsLoading = status === 'loading';
  React.useEffect(() => {
    dispatch(FetchByIDArticle(articleId!));
  }, [articleId]);

  return (
    <>
      <img
        src={arcticleByID?.imageUrl}
        style={{ width: '100%', height: '245px', objectFit: 'cover' }}
      />
      <Container maxWidth="lg">
        <Card sx={{ minWidth: 275, mt: -5, position: 'relative' }}>
          {IsLoading ? <Loading></Loading> : <></>}
          {error && <Error></Error>}
          <CardContent>
            <Typography
              sx={{ fontSize: 24, mb: '50px' }}
              align="center"
              color="text.secondary"
              gutterBottom>
              {arcticleByID?.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {arcticleByID?.summary}
            </Typography>
          </CardContent>
        </Card>
        <Button component={NavLink} to="/">
          <ArrowBackIcon /> Back to homepage
        </Button>
      </Container>
    </>
  );
};
