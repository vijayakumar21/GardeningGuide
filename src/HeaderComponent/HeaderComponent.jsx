
import './HeaderComponent.css';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(-2),
  },
  
  typography: {
    flexGrow: 1,
        align: "center",
        textDecoration: "none",
       
      },
  
      "@media ( min-width:960px)":{
        list:{
         marginTop:"1.8rem"
        }
  }

}));
export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <div className="App">
     <AppBar position="static" style={{ background: '#E2E7E6' }} >
  <Toolbar >
  <React.Fragment>
    <IconButton  edge="start" className={classes.menuButton+" menu"} onClick={toggleDrawer("left", true)} color="inherit" aria-label="menu">
      <MenuIcon style={{color:'#226826'}}/>
    </IconButton>
    <SwipeableDrawer
      anchor={"left"}
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      onOpen={toggleDrawer("left", true)}
    >
    <List style={{padding:"1.5rem 2.8rem" }} className={classes.list}>
    
    {["Home","Temperature","Humidity","Watering Report","Fertilising Report"].map((text, index) => (
          <ListItem button component={NavLink}  exact to={`/${text.split(' ')[0]}`} key={text} onClick={()=>setState(false)} style={{margin:"2.1rem 0",} } >
            <ListItemText disableTypography primary={<Typography  style={{fontFamily:"Open Sans"}}>{text}</Typography>}  />
          </ListItem>))
    }
       
    </List>
    </SwipeableDrawer>
  </React.Fragment>
    <Typography component={NavLink} exact={true} to='/' variant="h5" className={classes.typography} style={{ color: '#18581C', fontFamily:'Nunito',fontWeight:600 }}>
      Gardening Guide
    </Typography>
    
  </Toolbar>
</AppBar>
    </div>
  );
}



