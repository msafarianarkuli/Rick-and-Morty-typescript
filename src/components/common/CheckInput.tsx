import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import { InputEvent } from '../../core/types/Event.types';
import { data } from '../../core/types/FilterType.type';

type CheckInputType = {
  data: data[];
  label: string;
  onChange: (event: InputEvent) => void;
};

const CheckInput = ({ data, label, onChange }: CheckInputType) => {
  return (
    <>
      <Typography variant="h6">{label}</Typography>
      <FormGroup>
        {data.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox value={item.value} onChange={onChange} />
            }
            label={item.label}
            checked={item.checked}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default CheckInput;
