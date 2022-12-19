import { useState } from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { statusInfo, genderInfo } from '../core/data/data';
import { InputEvent } from '../core/types/Event.types';
import CheckInput from './common/CheckInput';
import TextInput from './common/TextInput';

const CharacterDesktopFilter = () => {
  const [searchParams, setSearchParams]: [URLSearchParams, Function] =
    useSearchParams();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [statuses, setStatuses] = useState(statusInfo);
  const [genders, setGenders] = useState(genderInfo);

  const handleChange = (e: InputEvent) => {
    setName(e.target.value);
    setSearchParams({
      ...(status ? { status } : {}),
      ...(gender ? { gender } : {}),
      ...(e.target.value ? { name: e.target.value } : {}),
    });
  };

  const statusChecked = (value: string) => {
    if (value) {
      setStatus(value);
      setStatuses(
        statuses.map((status) =>
          value === status.value
            ? { ...status, checked: true }
            : { ...status, checked: false }
        )
      );
      setSearchParams({
        ...(name ? { name } : {}),
        ...(gender ? { gender } : {}),
        status: value,
      });
    }
  };

  const statusUnchecked = (value: string) => {
    setStatus('');
    setStatuses(
      statuses.map((status) =>
        value === status.value
          ? { ...status, checked: false }
          : status
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(gender ? { gender } : {}),
    });
  };

  const handleStatuses = (event: InputEvent) => {
    event.target.checked
      ? statusChecked(event.target.value)
      : statusUnchecked(event.target.value);
  };

  const genderChecked = (value: string) => {
    if (value) {
      setGender(value);
      setGenders(
        genders.map((gender) =>
          value === gender.value
            ? { ...gender, checked: true }
            : { ...gender, checked: false }
        )
      );
      setSearchParams({
        ...(name ? { name } : {}),
        ...(status ? { status } : {}),
        gender: value,
      });
    }
  };

  const genderUnchecked = (value: string) => {
    setGender('');
    setGenders(
      genders.map((gender) =>
        value === gender.value
          ? { ...gender, checked: false }
          : gender
      )
    );
    setSearchParams({
      ...(name ? { name } : {}),
      ...(status ? { status } : {}),
    });
  };

  const handleGenders = (event: InputEvent) => {
    event.target.checked
      ? genderChecked(event.target.value)
      : genderUnchecked(event.target.value);
  };

  return (
    <>
      <Box sx={{ py: 2 }}>
        <TextInput
          label="Name"
          value={name}
          onChange={handleChange}
        />
      </Box>
      <Box sx={{ py: 2 }}>
        <CheckInput
          data={statuses}
          label="Status"
          onChange={handleStatuses}
        />
      </Box>
      <Box sx={{ py: 2 }}>
        <CheckInput
          data={genders}
          label="Gender"
          onChange={handleGenders}
        />
      </Box>
    </>
  );
};

export default CharacterDesktopFilter;
