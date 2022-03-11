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
    "& .MuiListItemText-root": {
      opacity: 1,
    }
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1
  },
  spacer: {
    height: '8rem',
    width: '100%',
  }
}))

export function Header(props) {
  const classes = useStyles();
  const theme = useTheme();  
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  

  const handleChange = (_e, newValue) => {
    props.setValue(newValue);
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
    props.setSelectedIndex(i);
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
    {name: "Services", link: "/services", activeIndex: 1, 
    ariaOwns: anchorEl ? "simple-menu" : undefined,
     ariaPopup: Boolean(anchorEl), mouseOver: (event) =>{ handleClick(event)}},
    {name: "The Revolution", link: "/revolution", activeIndex: 2},
    {name: "About us", link: "/about", activeIndex: 3},
    {name: "Contact Us", link: "/contact", activeIndex: 4},
  ];

  useEffect( ()=> {    
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
        break;
        default:
          break;
      }
    });
    
  }, [props.value, menuOptions, props.selectedIndex, routes])

  const tabs = (
    <React.Fragment>
        <Tabs value={props.value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">

          {routes.map((route, index) => (
            <Tab 
              className={classes.tab} 
              component={Link} 
              to={route.link}
              label={route.name}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.ariaPopup}
              onMouseOver={route.mouseOver}
              key={`${route}-${index}`}
            />

          ))}
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
                          props.setValue(1);
                          handleClose();
                        }}
                        selected={i === props.selectedIndex && props.value === 1}
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
      <div className={classes.toolBarMargin} style={{height: '7rem'}}/>
      <List disablePadding>
        {routes.map((route, index) => (
          <ListItem 
            divider
            button
            component={Link}
            to={route.link}
            selected={props.value === route.activeIndex}
            classes={{selected: classes.drawerItemSelected}}
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(route.activeIndex) 
            }}
            key={`${route}-${index}`}
          >
            <ListItemText            
              className={classes.drawerItem} 
              disableTypography
            >
              {route.name}
            </ListItemText>
          </ListItem>
        ))}  
        <ListItem 
          onClick={() =>  {setOpenDrawer(false); props.setValue(5)}} 
          selected={props.value === 5} 
          className={classes.drawerItemEstimate} 
          divider 
          button 
          component={Link} 
          to="/estimate"
        >
          <ListItemText 
            classes={{root: classes.drawerItem, selected: classes.drawerItemSelected}} 
            disableTypography 
          >
            Free estimate
          </ListItemText>
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
    <AppBar position="fixed" className={classes.appBar}>
      <ToolBar disableGutters>
        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => props.setValue(0)}>
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