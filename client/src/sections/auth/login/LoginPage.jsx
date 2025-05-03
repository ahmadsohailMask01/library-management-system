import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Container, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import Logo from '../../../components/logo';
import { LoginForm } from './index';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const { login, user } = useAuth();

  if (user) {
    if (user.isAdmin) {
      return <Navigate to={'/dashboard'} replace />;
    }
    return <Navigate to={'/books'} replace />;
  }

  const loginUser = (email, password) => {
    if (email === '' || password === '') {
      toast.error('Please enter email and password');
    } else {
      axios
        .post(`http://localhost:8080/api/auth/login`, { email, password }, { withCredentials: false })
        .then((response) => {
          // handle success
          if (response.status === 200) {
            console.log(response.data);
            toast.success(`Successfully logged in as ${response.data.user.name}`);
            login(response.data.user);
          }
        })
        .catch((error) => {
          // handle error
          toast.error(error.response.data.message);
          console.log(error);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title> Login | Library</title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
          }}
          src="./assets/fazaia.jpg"
          style={{ width: `40%`, top: `16%`, left: `2%` }}
        />

        <Container maxWidth="sm">
          <StyledContent>
            <img
              src="/assets/libLogo.jpg"
              alt="Library Management System Logo"
              style={{ width: `150px`, height: `150px`, marginLeft: `35%`, marginBottom: `5%` }}
            />
            <Typography variant="h3" textAlign="center" gutterBottom paddingBottom={3}>
              Sign in
            </Typography>

            <LoginForm loginUser={loginUser} />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
