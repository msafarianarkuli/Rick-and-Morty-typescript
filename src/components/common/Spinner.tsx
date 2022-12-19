import { Backdrop, CircularProgress } from '@mui/material';

type SpinnerType = {
  open: boolean;
};

const Spinner = ({ open }: SpinnerType) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Spinner;
