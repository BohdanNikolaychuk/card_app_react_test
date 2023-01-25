import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
export const Loading = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      </Container>
    </>
  );
};
