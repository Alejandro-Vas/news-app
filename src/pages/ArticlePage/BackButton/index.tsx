import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function BackButton() {
  const navigate = useNavigate();
  return (
    <IconButton
      color="primary"
      size="large"
      onClick={() => navigate('/')}
    >
      <ArrowBackIosNewIcon />
    </IconButton>
  );
}

export default BackButton;
