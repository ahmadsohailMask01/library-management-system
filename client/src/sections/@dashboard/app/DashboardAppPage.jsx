import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiUrl, methods, routes } from '../../../constants';
import { AppCurrentVisits, AppWebsiteVisits, AppWidgetSummary } from './index';
import { useAuth } from '../../../hooks/useAuth';
import Chart from '../../../components/Chart';
import PieChart from '../../../components/PieChart';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [users, setUsers] = useState([]);
  const [borrowals, setBorrowals] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [downloads, setDownloads] = useState(null);
  const [books, setBooks] = useState(null);
  const getAllUsers = () => {
    axios
      .get(apiUrl(routes.USER, methods.GET_ALL))
      .then((response) => {
        // handle success
        // console.log(response.data);
        setUsers(response.data.usersList);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const fetchDownloads = async () => {
    const res = await axios.get(apiUrl(routes.TOTAL_DOWNLOADS, methods.TOTAL_DOWNLOADS));
    // console.log(res.data.downloads);
    setDownloads(res.data.downloads);
  };

  const getAllBorrowals = () => {
    axios
      .get(apiUrl(routes.BORROWAL, methods.GET_ALL))
      .then((response) => {
        // handle success
        // console.log(response.data);
        setBorrowals(response.data.borrowalsList);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };
  const getAllAuthors = () => {
    axios
      .get(apiUrl(routes.AUTHOR, methods.GET_ALL))
      .then((response) => {
        // handle success
        console.log(response.data);
        setAuthors(response.data.authorsList);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  const getAllBooks = () => {
    axios
      .get(apiUrl(routes.BOOK, methods.GET_ALL))
      .then((response) => {
        // handle success
        console.log(response.data);
        setBooks(response.data.booksList);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBooks();
    getAllUsers();
    getAllBorrowals();
    getAllAuthors();
    fetchDownloads();
  }, []);
  const { user } = useAuth();
  const theme = useTheme();
  const userCount = users?.length || 0;
  const authorCount = authors?.length || 0;
  const borrowalCount = borrowals?.length || 0;

  return (
    <>
      <Helmet>
        <title> Library | Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi {user.name.split(' ')[0]}, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="No. of Borrowals"
              total={borrowals?.length > 0 ? borrowals?.length : '0'}
              icon={'ant-design:book-filled'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Users"
              total={users?.length > 0 ? users?.length : '0'}
              color="info"
              icon={'ant-design:user'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="No. of Book Registered"
              total={books && books?.length}
              color="warning"
              icon={'ant-design:book'}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="No. of Authors"
              total={authors?.length > 0 ? authors.length : '0'}
              color="error"
              icon={'ant-design:team-outlined'}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            {/* <AppWebsiteVisits
              title="Website Counts"
              subheader="See no. of users, authors and borrowals"
              chartLabels={['Total']}
              chartData={[
                {
                  name: 'Users',
                  type: 'column',
                  fill: 'solid',
                  data: users,
                },
                {
                  name: 'Authors',
                  type: 'area',
                  fill: 'gradient',
                  data: authors,
                },
                {
                  name: 'Borrowals',
                  type: 'line',
                  fill: 'solid',
                  data: borrowals,
                },
              ]}
            /> */}
            <Chart users={users} borrowals={borrowals} authors={authors} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            {/* <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            /> */}
            <PieChart users={users} authors={authors} borrowals={borrowals} downloads={downloads} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
