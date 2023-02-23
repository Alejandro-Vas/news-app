import { Typography } from '@mui/material';
import HandymanIcon from '@mui/icons-material/Handyman';

function AboutPage() {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
      >
        About Page
      </Typography>

      <HandymanIcon
        color="info"
        fontSize="large"
        sx={{ verticalAlign: 'bottom', mr: 1 }}
      />

      <Typography variant="h3" component="span">
        Under construction...
      </Typography>
    </>
  );
}
export default AboutPage;
