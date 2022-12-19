import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { BookmarkType } from '../core/types/Bookmark.types';

type FavoriteCardProps = {
  data: BookmarkType;
};

const FavoriteCard = ({ data }: FavoriteCardProps) => {
  const { name, image } = data;

  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: { xs: 24, sm: 20 } }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
