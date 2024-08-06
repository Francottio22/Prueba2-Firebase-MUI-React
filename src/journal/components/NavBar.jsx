import * as React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
import { startLogout } from '../../store/auth';
import { useSelector } from 'react-redux';
import { LogoutOutlined } from '@mui/icons-material';


export const NavBar = () => {

    const { displayName } = useSelector( state => state.auth );

const dispatch = useDispatch();

const onLogout = () => {
    dispatch( startLogout() );
}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
        

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {displayName} 
           </Typography>

           <IconButton 
                    color='error'
                    onClick={ onLogout }>
                    <LogoutOutlined />
                </IconButton>

            </Toolbar>
      </AppBar>
    </Box>
  );
}
