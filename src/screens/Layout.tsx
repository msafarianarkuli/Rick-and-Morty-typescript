import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import CharacterDesktopFilter from '../components/CharacterDesktopFilter';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        md={3}
        lg={2}
        sx={{
          boxShadow: 3,
          px: 2,
          display: { md: 'block', xs: 'none' },
          height: '100vh',
          position: 'fixed',
          bgcolor: 'white',
        }}
      >
        <CharacterDesktopFilter />
      </Grid>
      <Grid
        item
        md={3}
        lg={2}
        sx={{
          boxShadow: 3,
          px: 2,
          bgcolor: 'grey.100',
          display: { md: 'block', xs: 'none' },
        }}
      ></Grid>
      <Grid
        item
        md={9}
        lg={10}
        xs={12}
        sx={{ padding: '15px', bgcolor: 'grey.100', height: '100vh' }}
      >
        <Navbar />
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Layout;
