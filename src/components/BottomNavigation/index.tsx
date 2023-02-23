import { Link } from 'react-router-dom';

import { useState } from 'react';
import {
  Paper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';

const actions = [
  {
    label: 'Main',
    icon: <HomeIcon />,
    to: '/',
  },
  {
    label: 'Favorites',
    icon: <FavoriteIcon />,
    to: '/',
  },
  {
    label: 'About',
    icon: <InfoIcon />,
    to: '/about',
  },
];

function BottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {actions.map(({ label, icon, to }) => (
          <BottomNavigationAction
            label={label}
            icon={icon}
            to={to}
            component={Link}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  );
}

export default BottomNavigation;
