import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Preloader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 102px)',
      }}
    >
      <CircularProgress size="8rem" color="secondary" />
    </Box>
  );
};
