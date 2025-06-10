import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Journals from '../../../components/journals/Journals';

const Journal = () => {
  return (
    <Container style={{ marginBottom: `3%` }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3" sx={{ mb: 5 }}>
          Journals
        </Typography>
      </Stack>
      <Journals />
    </Container>
  );
};

export default Journal;
