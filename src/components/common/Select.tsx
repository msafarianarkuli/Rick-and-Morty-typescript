import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

type Gender = {
  id: number;
  value: string;
  label: string;
  checked: boolean;
};

type SelectInputProps = {
  label: string;
  value: string;
  data: Gender[];
  onChange: (event: SelectChangeEvent) => void;
};

const SelectInput = ({
  value,
  data,
  onChange,
  label,
}: SelectInputProps) => {
  return (
    <FormControl sx={{ width: 1, mr: 1 }} size="small">
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="gender"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="">not defined</MenuItem>
        {data.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
