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

const drawerWidth = 240;
const navItems = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Favorite articles',
    to: '/favorites',
  },
];

interface IDrawerProps {
  handleDrawerToggle: () => void
}

function Drawer({ handleDrawerToggle }: IDrawerProps) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map(({ title, to }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink to={to} style={{ textDecoration: 'none' }}>
                <ListItemText primary={title} sx={{ color: 'text.primary' }} />
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
    <Box sx={{ display: 'flex' }}>
      <MuiAppBar component="nav" id="back-to-top-anchor">
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h5"
                component="h1"
                sx={{ flexGrow: 1, color: 'background.paper' }}
              >
                New York Times articles
              </Typography>
            </NavLink>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ title, to }) => (
              <Button key={title}>
                <NavLink to={to} style={{ textDecoration: 'none' }}>
                  <Box sx={{ color: 'background.paper' }}>
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
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Drawer handleDrawerToggle={handleDrawerToggle} />
        </MuiDrawer>
      </Box>
    </Box>
  );
}

export default AppBar;
