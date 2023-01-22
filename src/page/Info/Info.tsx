import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
// MUI
import { Button, Box, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// types
import { IArticle } from '../../@types/IArticle';

//redux
import { FetchByIDArticle } from '../../store/article/asyncAction';
import { useAppDispatch } from '../../store/store';

export const Info = () => {
  const dispatch = useAppDispatch();
  const { articleId } = useParams();
  const [InfoData, setInfoData] = React.useState<IArticle | null>(null);

  React.useEffect(() => {
    dispatch(FetchByIDArticle(articleId!))
      .unwrap()
      .then((res) => setInfoData(res));
  }, [articleId]);

  return (
    <>
      <img
        src={InfoData?.imageUrl}
        style={{ width: '100%', height: '245px', objectFit: 'cover' }}
      />
      <Container maxWidth="lg">
        <Card sx={{ minWidth: 275, mt: -5, position: 'relative' }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 24, mb: '50px' }}
              align="center"
              color="text.secondary"
              gutterBottom>
              {InfoData?.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {InfoData?.summary}
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
