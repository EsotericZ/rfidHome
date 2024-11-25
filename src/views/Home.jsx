import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { useUserContext } from '../context/UserContext';

import PageContainer from '../components/PageContainer';

export const Home = () => {
  const { cookieData } = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <PageContainer loading={loading} title='Home'>
      <Box sx={{ padding: '12px' }}>
        <Typography>Under Construction</Typography>
      </Box>
    </PageContainer>
  );
};