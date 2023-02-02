import React from 'react';

// react router Dom
import { NavLink } from 'react-router-dom';
//MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';

//helper
import { FormatData } from '../../helpers/FormatData';
import { IArticle } from '../../@types/IArticle';

export const MediaCard = React.memo(({ imageUrl, title, summary, id, publishedAt }: IArticle) => {
  return (
    <Card sx={{ maxWidth: 400, height: 530, mt: '30px', position: 'relative' }}>
      <CardMedia sx={{ height: 220, maxWidth: 400 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Box sx={{ display: 'flex', opacity: '0.6' }}>
          <Typography sx={{ fontSize: '14px' }}>{FormatData(publishedAt)}</Typography>
        </Box>

        <Typography variant="subtitle2" sx={{ fontSize: '20px', mb: 1, mt: 1, lineHeight: '29px' }}>
          {title}
        </Typography>

        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '5',
            WebkitBoxOrient: 'vertical',
            fontSize: '16px',
            maxHeight: '96px',
          }}
          variant="body2"
          color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          bottom: '0',
        }}>
        <Button component={NavLink} to={`/article/${id}`} size="small">
          Read More <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  );
});
