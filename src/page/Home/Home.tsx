import { Grid, Typography } from '@mui/material';
import { useAppSelector } from '../../store/store';
import { Search } from '../../components';
import MediaCard from '../../components/Card/Card';
import { selectActicleData } from '../../store/article/selector';
export const Home = () => {
  const { acticle } = useAppSelector(selectActicleData);

  return (
    <>
      <Typography>Filter by keywords</Typography>
      <Search></Search>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {acticle.map((element: any) => (
          <Grid item xs={2} sm={4} md={4} key={element.id}>
            <MediaCard {...element}></MediaCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
