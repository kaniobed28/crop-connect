import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Farmer', path: '/farmer' },
    { label: 'Services', path: '/services' },
    { label: 'Market', path: '/market' },
    { label: 'Delivery Service', path: '/delivery-service' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        {/* Logo, Title, and Flags */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box
            component="img"
            src="/assets/cropconnect.jpg"
            alt="CropConnect Logo"
            sx={{
              width: '40px',
              height: '40px',
              mr: 1,
              objectFit: 'contain',
            }}
          />
          <Typography
            variant="h6"
            sx={{ color: '#2e7d32', fontWeight: 'bold', mr: 1 }}
          >
            CropConnect
          </Typography>
          {/* Flag Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/assets/ghana-flag.png"
              alt="Ghana Flag"
              sx={{
                width: '24px',
                height: '24px',
                mr: 0.5,
                objectFit: 'contain',
              }}
            />
            <Box
              component="img"
              src="/assets/nigeria-flag.png"
              alt="Nigeria Flag"
              sx={{
                width: '24px',
                height: '24px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>

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