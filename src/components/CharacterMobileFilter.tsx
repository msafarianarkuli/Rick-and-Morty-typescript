import { useState } from 'react';
import {
  Grid,
  Box,
  TextField,
  SelectChangeEvent,
} from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { statusInfo, genderInfo } from '../core/data/data';
import { InputEvent } from '../core/types/Event.types';
import Select from './common/Select';

const CharacterMobileFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');

  const handleChange = (e: InputEvent) => {
    setName(e.target.value);
    setSearchParams({
      ...(status ? { status } : {}),
      ...(gender ? { gender } : {}),
      ...(e.target.value ? { name: e.target.value } : {}),
    });
  };

  const handleStatuses = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
    setSearchParams({
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
      ...(event.target.value ? { status: event.target.value } : {}),
    });
  };

  const handleGenders = (event: SelectChangeEvent) => {
    setGender(event.target.value);
    setSearchParams({
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
      ...(event.target.value ? { gender: event.target.value } : {}),
    });
  };

  return (
    <Grid
      item
      xs={12}
      sx={{
        display: { xs: 'block', md: 'none' },
        mt: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: 2,
          py: 2,
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          label="Name"
          onChange={handleChange}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          <Select
            value={status}
            data={statusInfo}
            onChange={handleStatuses}
            label="Status"
          />
          <Select
            value={gender}
            data={genderInfo}
            onChange={handleGenders}
            label="Gender"
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default CharacterMobileFilter;
