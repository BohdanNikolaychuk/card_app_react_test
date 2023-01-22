import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { FormatData } from '../../helpers/FormatData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box } from '@mui/material';
export default function MediaCard({ imageUrl, title, summary, id, publishedAt }: any) {
  return (
    <Card sx={{ maxWidth: 400, height: 530, mt: '30px', position: 'relative' }}>
      <CardMedia sx={{ height: 220, maxWidth: 400 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Box sx={{ display: 'flex', opacity: '0.6' }}>
          <CalendarTodayIcon />
          <Typography sx={{ fontSize: '14px' }}>{FormatData(publishedAt)}</Typography>
        </Box>
        <Typography sx={{ fontSize: '20px', mb: 1, mt: 1, lineHeight: '29px' }}>{title}</Typography>
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
}
