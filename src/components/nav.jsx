import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

const pages = ["Cerrar sesión"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);

    if(event.target.id ==="end"){
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      window.location.replace("/");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="" sx={{margin:"0",background:"#ffff",marginBottom:"30px", boxShadow:"none",color:"black"}}  m={0}>
      <Container maxWidth="xl" m={0}>
        <Toolbar disableGutters m={0}>
        <Link to={"/home"} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              marginTop:"-4px",

              color: 'black',
              textDecoration: 'none',
            }}
          >
            voxdatacomm
          </Typography>
          </Link>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem key={"zona"}                
  color="inherit" onClick={handleCloseNavMenu}>
                  <Typography  color="inherit"  id={"end"}  onClick={handleCloseNavMenu} textAlign="center">{"Cerrar sesión"}</Typography>
                </MenuItem>
                <Link to={"/distancia"}style={{ textDecoration: 'none', color:"black"}} >
                <MenuItem key={"closed"}   color="black" onClick={handleCloseNavMenu}>
                <Typography  color="inherit"  textAlign="center">{"Precio promedio por zona"}</Typography>
              </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Link to={"/home"} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h5"
            
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            voxdatacomm
          </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' ,} }}>
          <Link to={"/distancia"} style={{ textDecoration: 'none' }}>
              <Button
                key={"closed"}
                onClick={handleCloseNavMenu}
                id={"promedio"}
                color="inherit"
                
                sx={{ my: 0, color: 'black',paddingLeft:"20px", display: 'block' }}
              >
                Precio promedio por zona
              </Button>
              </Link>
                <Button
                key={"closed"}
                onClick={handleCloseNavMenu}
                id={"end"}
                color="inherit"
                sx={{ my: 0, color: 'black',paddingLeft:"20px", display: 'block' }}
              >
                Cerrar Sesión
              </Button>
          
             
            
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;