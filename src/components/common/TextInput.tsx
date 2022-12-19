import { TextField, Typography } from '@mui/material';
import { InputEvent } from '../../core/types/Event.types';

type TextInputType = {
  label: string;
  value: string;
  onChange: (e: InputEvent) => void;
};

const TextInput = ({ label, value, onChange }: TextInputType) => {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        {label}
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TextInput;
