import { Box } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ mt: 2, p: 3 }}>
      {`${new Date().getFullYear()}`}
    </Box>
  )
}

export default Footer;
