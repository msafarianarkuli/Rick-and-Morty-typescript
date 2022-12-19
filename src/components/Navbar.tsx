import { useState, useContext } from 'react';
import { Grid, Box, Typography, Badge, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { bookmarkContext } from '../core/context/BookmarkContext';
import FavoriteList from './FavoriteList';
import CharacterMobileFilter from './CharacterMobileFilter';

const Navbar = () => {
  const { bookmarks } = useContext(bookmarkContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sx={{ boxShadow: '2', bgcolor: 'white', borderRadius: 1 }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            py: 2,
          }}
        >
          <Link to="/">
            <Typography
              variant="h4"
              sx={{ color: 'black', fontSize: { xs: 22, sm: 32 } }}
            >
              Rick and Morty
            </Typography>
          </Link>
          <Badge
            badgeContent={bookmarks?.length}
            color="success"
            max={9}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleOpen()}
              disabled={bookmarks?.length === 0 ? true : false}
            >
              Favorites
            </Button>
          </Badge>
        </Box>
        <CharacterMobileFilter />
      </Grid>
      <FavoriteList open={open} onClose={handleClose} />
    </>
  );
};

export default Navbar;
