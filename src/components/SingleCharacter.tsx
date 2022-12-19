import { Backdrop, CircularProgress, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import SingleCard from './SingleCard';
import { getSingleChars } from '../core/services/api';
import Spinner from './common/Spinner';

const SingleCharacter = () => {
  const { characterId } = useParams();

  const { isLoading, data: character } = useQuery(
    ['product', characterId],
    getSingleChars
  );

  return (
    <Grid container>
      <Grid item xs={12} sx={{ py: 2 }}>
        {isLoading && <Spinner open={isLoading} />}
        {!isLoading && <SingleCard data={character} />}
      </Grid>
    </Grid>
  );
};

export default SingleCharacter;
