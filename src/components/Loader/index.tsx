import {
  Box, Typography, CircularProgress,
} from '@mui/material';

function Loader() {
  return (
    <Box sx={{
      margin: '0 auto',
      textAlign: 'center',
      mt: 10,
    }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

      }}
      >
        <CircularProgress size={64} />
      </Box>

      <Typography
        variant="subtitle1"
        component="div"
        sx={{ mt: 2 }}
      >
        Loading...
      </Typography>
    </Box>
  );
}

export default Loader;
