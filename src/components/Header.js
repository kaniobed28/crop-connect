import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; // Add react-router for navigation
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation(); // To highlight active link

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Farmer', path: '/farmer' },
    { label: 'Services', path: '/services' },
    { label: 'Market', path: '/market' },
    { label: 'PFJ 2.0', path: '/pfj' },
    { label: 'Resources', path: '/resources' },
    { label: 'Agro Climate', path: '/agro-climate' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        {/* Logo/Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: '#2e7d32', fontWeight: 'bold' }}
        >
          CropConnect
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: location.pathname === item.path ? '#2e7d32' : '#424242',
                mx: 1,
                textTransform: 'none',
                fontSize: '1rem',
                '&:hover': { color: '#2e7d32' },
              }}
            >
              {item.label}
            </Button>
          ))}
          <IconButton sx={{ color: '#424242', mx: 1 }}>
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#2e7d32',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
              '&:hover': { backgroundColor: '#1b5e20' },
            }}
            endIcon={<ArrowForwardIcon sx={{ color: '#ffca28' }} />}
            component={Link}
            to="/login"
          >
            Login
          </Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          sx={{ display: { xs: 'block', md: 'none' }, color: '#424242' }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item.label} component={Link} to={item.path} onClick={toggleDrawer(false)}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ color: location.pathname === item.path ? '#2e7d32' : '#424242' }}
              />
            </ListItem>
          ))}
          <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
            <ListItemText primary="Login" primaryTypographyProps={{ color: '#424242' }} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;