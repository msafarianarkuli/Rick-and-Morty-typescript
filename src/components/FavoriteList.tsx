import React, { useContext } from 'react';
import {
  Grid,
  Typography,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Slide,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { bookmarkContext } from '../core/context/BookmarkContext';
import FavoriteCard from './FavoriteCard';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type FavoriteListProps = {
  open: boolean;
  onClose: () => void;
};

const FavoriteList = ({ open, onClose }: FavoriteListProps) => {
  const { bookmarks, resetBookmark } = useContext(bookmarkContext);

  const handleReset = () => {
    resetBookmark();
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <Typography
            sx={{ ml: 2, flex: 1 }}
            variant="h6"
            component="div"
          >
            Favorites
          </Typography>
          <Button autoFocus color="inherit" onClick={handleReset}>
            reset
          </Button>
          <Button autoFocus color="inherit" onClick={onClose}>
            close
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={4} sx={{ p: 4 }}>
        {bookmarks.map((bookmark) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FavoriteCard data={bookmark} />
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
};

export default FavoriteList;
