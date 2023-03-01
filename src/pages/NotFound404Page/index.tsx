import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound404Page() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
        >
          Page not found (404)
        </Typography>

        <Typography variant="h3" component="span">
          The link you clicked may be broken or the page may have been removed
        </Typography>
      </div>

      <Button
        sx={{ mt: 2 }}
        onClick={() => navigate('./')}
      >
        MAIN PAGE
      </Button>
    </>
  );
}
export default NotFound404Page;
