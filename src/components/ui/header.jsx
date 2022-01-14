import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ToolBar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';
import { MenuItem } from '@material-ui/core';



function ElevationScroll(props) {
  const { children } = props;
 
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => createStyles({  
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: "1.25em",
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down('md')]: {
      height: "7em",
    },
    [theme.breakpoints.down('xs')]: {
      height: "5.5em"
    }
  },
  tabContainer: {
    marginLeft: 'auto',
    '& .MuiTabs-indicator': {
      display: 'none'
    }
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px",
    boxShadow: "none",
    border: 0
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "3.125rem",
    width: "3.125rem"
  },
  drawer: {
    backgroundColor: theme.palette.common.arcBlue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange
  },
  drawerItemSelected: {
    opacity: 1
  }
}))

export function Header(props) {
  const classes = useStyles();
  const theme = useTheme();  
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setValue] = useState(0);
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuOptions = [
    {
      name: "Services", 
      link: "/services", 
      activeIndex: 1, 
      selectedIndex: 0
    },
    {
      name: "Custom Software Development", 
      link: "/customsoftware", 
      activeIndex: 1, 
      selectedIndex: 1
    },
    {
      name: "Mobile App Development", 
      link: "/mobileapps", 
      activeIndex: 1, 
      selectedIndex: 2
    },
    {
      name: "Website Development", 
      link: "/websites", 
      activeIndex: 1, 
      selectedIndex: 3
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = [
    {name: "Home", link: "/", activeIndex: 0},
    {name: "Services", link: "/services", activeIndex: 1 },
    {name: "The Revolution", link: "/revolution", activeIndex: 2},
    {name: "About us", link: "/about", activeIndex: 3},
    {name: "Contact Us", link: "/contact", activeIndex: 4},
  ];

  useEffect( ()=> {    
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
        break;
        default:
          break;
      }
    });
    
  }, [value, menuOptions, selectedIndex, routes])

  const tabs = (
    <React.Fragment>
        <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
          <Tab className={classes.tab} component={Link} to="/" label="Home"/>
          <Tab 
            classes={{root: {color: "red"}}} 
            component={Link} to="/services" 
            label="services" 
            aria-owns={anchorEl ? "simple-menu" : undefined}
            aria-haspopup={Boolean(anchorEl)}
            onMouseOver={(event) =>{ handleClick(event);}}                    
          />
          <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
          <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
          <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>
        </Tabs>
        <Button variant="contained" color="secondary" className={classes.button}>
          Free Estimate
        </Button>
        <Popper open={openMenu} anchorEl={anchorEl} role={undefined} transition disablePortal onMouseLeave={() => handleClose()} >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              onMouseLeave={() => handleClose()}
            >
              <Paper elevation={0} classes={{root: classes.menu}} onMouseLeave={() => handleClose()}>
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList autoFocusItem={openMenu} id="simple-menu" classes={{paper: classes.menu}}>
                    {menuOptions.map((option, i) => (
                      <MenuItem 
                        key={option}
                        component={Link} 
                        to={option.link}
                        onClick={(event) => {
                          handleMenuItemClick(event, i);
                          setValue(1);
                          handleClose();
                        }}
                        selected={i === selectedIndex && value === 1}
                        classes={{ root: classes.MenuItem }}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
    </React.Fragment>
  )

  const drawer =  (
    <React.Fragment>
    <SwipeableDrawer 
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS} 
      open={openDrawer} 
      onClose={() => setOpenDrawer(false)} 
      onOpen={() => setOpenDrawer(true)}
      classes={{paper: classes.drawer}}>
      <List disablePadding>
        <ListItem onClick={() => {setOpenDrawer(false); setValue(0)}} selected={value === 0} divider button component={Link} to="/">
          <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography >Home</ListItemText>
        </ListItem>
        <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}}  selected={value === 1} divider button component={Link} to="/services">
          <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography>Services</ListItemText>
        </ListItem>
        <ListItem onClick={() =>  {setOpenDrawer(false); setValue(2)}} selected={value === 2} divider button component={Link} to="/revolution">
          <ListItemText  className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography>The revolution</ListItemText>
        </ListItem>       
        <ListItem onClick={() =>  {setOpenDrawer(false); setValue(3)}} selected={value === 3} divider button component={Link} to="/about">
          <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography>About Us</ListItemText>
        </ListItem>
        <ListItem onClick={() =>  {setOpenDrawer(false); setValue(4)}} selected={value === 4} divider button component={Link} to="/contact">
          <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography>Contact</ListItemText>
        </ListItem>
        <ListItem onClick={() =>  {setOpenDrawer(false); setValue(5)}} selected={value === 5} className={classes.drawerItemEstimate} divider button component={Link} to="/estimate">
          <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] :classes.drawerItem } disableTypography >Free estimate</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
      <IconButton 
        className={classes.drawerIconContainer} 
        onClick={() => setOpenDrawer(!openDrawer)} 
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )

  return(
    <React.Fragment>     
    <ElevationScroll>
    <AppBar position="fixed">
      <ToolBar disableGutters>
        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => setValue(0)}>
        <img src={logo} alt="company logo" className={classes.logo}/>
        </Button>
        
        {matches ? drawer : tabs}
       
      </ToolBar>    
    </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin}/>    
    </React.Fragment>
  );
}