import { Typography, Box } from '@mui/material';

function Header() {
  return (
    <Box>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          bgcolor: 'primary.main',
          color: 'background.paper',
          px: 1,
        }}
      >
        New York Times articles
      </Typography>
    </Box>
  );
}
export default Header;
