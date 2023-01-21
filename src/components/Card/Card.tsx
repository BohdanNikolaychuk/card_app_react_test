import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function MediaCard({ imageUrl, title, summary, id }: any) {
  return (
    <Card sx={{ maxWidth: 400, height: 530 }}>
      <CardMedia sx={{ height: 220, width: 400 }} image={imageUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '5',
            WebkitBoxOrient: 'vertical',
          }}
          variant="body2"
          color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Read More</Button> */}
        <Link to={`/article/${id}`}> Learn More</Link>
      </CardActions>
    </Card>
  );
}
