import { Link, useLocation } from 'react-router-dom';

import { useEffect, useState } from 'react';
import {
  Paper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';

const paths = [
  {
    label: 'Main',
    icon: <HomeIcon />,
    to: '/',
  },
  {
    label: 'Favorites',
    icon: <FavoriteIcon />,
    to: '/favorites',
  },
  {
    label: 'About',
    icon: <InfoIcon />,
    to: '/about',
  },
];

function BottomNavigation() {
  const { pathname } = useLocation();
  const [pathIndex, setPathIndex] = useState(() => paths.findIndex(({ to }) => to === pathname));

  useEffect(() => {
    const matchedRouteIndex = paths.findIndex(({ to }) => to === pathname);

    if (matchedRouteIndex) {
      setPathIndex(matchedRouteIndex);
    }
  }, [pathname]);

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={4}
    >
      <MuiBottomNavigation
        showLabels
        value={pathIndex}
        onChange={(event, newValue) => {
          setPathIndex(newValue);
        }}
      >
        {paths.map(({ label, icon, to }) => (
          <BottomNavigationAction
            key={label}
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
