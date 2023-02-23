import * as React from 'react';
import {
  AppBar as MuiAppBar,
  Drawer as MuiDrawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

import styles from './styles';

const navItems = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Favorite articles',
    to: '/favorites',
  },
  {
    title: 'About',
    to: '/about',
  },
];

interface IDrawerProps {
  handleDrawerToggle: () => void
}

function Drawer({ handleDrawerToggle }: IDrawerProps) {
  return (
    <Box onClick={handleDrawerToggle} sx={styles.drawer}>
      <List>
        {navItems.map(({ title, to }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <NavLink to={to} style={{ textDecoration: 'none' }}>
                <ListItemText primary={title} sx={styles.listItemText} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function AppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={styles.appBar}>
      <MuiAppBar component="nav" id="back-to-top-anchor">
        <Toolbar
          sx={styles.toolbar}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h1"
                component="h1"
                sx={styles.h1}
              >
                New York Times articles
              </Typography>
            </NavLink>
          </Box>

          <Box sx={styles.navItemsWrapper}>
            {navItems.map(({ title, to }) => (
              <Button key={title}>
                <NavLink to={to} style={{ textDecoration: 'none' }}>
                  <Box sx={styles.navLink}>
                    {title}
                  </Box>
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </MuiAppBar>

      <Box component="nav">
        <MuiDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={styles.drawerWrapper}
        >
          <Drawer handleDrawerToggle={handleDrawerToggle} />
        </MuiDrawer>
      </Box>
    </Box>
  );
}

export default AppBar;
