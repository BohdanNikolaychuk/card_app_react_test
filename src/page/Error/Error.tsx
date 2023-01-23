import { Alert, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
const Error = () => {
  return (
    <Container maxWidth="md">
      <Alert severity="error">Error page</Alert>
      <Button component={NavLink} to="/">
        <ArrowBackIcon /> Back to homepage
      </Button>
    </Container>
  );
};

export default Error;
