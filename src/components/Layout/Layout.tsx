import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </>
  );
};
