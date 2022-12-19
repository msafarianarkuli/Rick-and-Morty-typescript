import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import {
  Backdrop,
  CircularProgress,
  Grid,
  Pagination,
  Box,
} from '@mui/material';

import Card from './Card';
import { getChars } from '../core/services/api';
import { BookmarkType } from '../core/types/Bookmark.types';
import Spinner from './common/Spinner';

type PaginationInfoType = {
  count: number;
  pages: number;
  next: string;
  prev: boolean;
};

const CharacterList = () => {
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();

  const [characters, setCharacters] = useState<BookmarkType[]>();
  const [paginationInfo, setpaginationInfo] =
    useState<PaginationInfoType>();
  const [page, setPage] = useState(1);

  let name = searchParams.get('name')?.toString();
  let status = searchParams.get('status')?.toString();
  let gender = searchParams.get('gender')?.toString();

  const { isLoading, data } = useQuery(
    ['product', page, name, status, gender],
    getChars
  );

  useEffect(() => {
    setCharacters(data?.results);
    setpaginationInfo(data?.info);
    searchParams.get('page')
      ? setPage(Number(searchParams.get('page')))
      : setPage(1);
  }, [data]);

  const handlePageChange = (value: number) => {
    setSearchParams({
      page: value,
      ...(status ? { status } : {}),
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
    });
    setPage(value);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {isLoading && <Spinner open={isLoading} />}
          <Grid container spacing={2} sx={{ py: 2 }}>
            {characters?.map((character) => (
              <Grid key={character.id} item xs={6} sm={4} md={3}>
                <Card data={character} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {paginationInfo ? (
              <Pagination
                sx={{ mx: 'auto', my: 2 }}
                count={paginationInfo?.pages}
                onChange={(
                  event: React.ChangeEvent<unknown>,
                  value: number
                ) => handlePageChange(value)}
                color="primary"
                page={Number(page)}
              />
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterList;
