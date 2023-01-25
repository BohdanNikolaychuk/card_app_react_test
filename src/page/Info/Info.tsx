import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
// MUI
import { Button, Typography, Container, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//redux
import { selectIdEntity } from '../../store/article/selector';
import { useAppSelector } from '../../store/store';

export const Info = React.memo(() => {
  const { articleId } = useParams();
  const articleById = useAppSelector(selectIdEntity(+articleId!));

  return (
    <>
      <img
        src={articleById?.imageUrl}
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
              {articleById?.title}
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {articleById?.summary}
            </Typography>
          </CardContent>
        </Card>
        <Button component={NavLink} to="/">
          <ArrowBackIcon /> Back to homepage
        </Button>
      </Container>
    </>
  );
});
