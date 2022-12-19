import { useContext } from 'react';
import { bookmarkContext } from '../core/context/BookmarkContext';
import {
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BookmarkType } from '../core/types/Bookmark.types';

type CardProps = {
  data: BookmarkType;
};

const InfoCard = ({ data }: CardProps) => {
  const { image, name, status, id } = data;

  const { addAndRemoveToFavorites, bookmarks } =
    useContext(bookmarkContext);

  return (
    <Card>
      <CardMedia component="img" image={image} alt={name} />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Link to={`/character/${id}`}>
            <Typography
              variant="h6"
              component="div"
              color="primary"
              sx={{ height: 50 }}
            >
              {name.slice(0, 13)}
              {name.length >= 13 ? '...' : null}
            </Typography>
          </Link>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="overline"
              display="block"
              color={
                status == 'Alive'
                  ? 'green'
                  : status == 'Dead'
                  ? 'red'
                  : 'black'
              }
            >
              {status}
            </Typography>
            <Checkbox
              icon={<FaRegBookmark />}
              checkedIcon={<FaBookmark />}
              checked={bookmarks.some(
                (bookmark) => bookmark.id === id
              )}
              onClick={() => addAndRemoveToFavorites(data)}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
