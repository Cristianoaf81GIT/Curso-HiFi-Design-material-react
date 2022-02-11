import React from 'react';
import {makeStyles, createStyles} from '@material-ui/core';
import footerAdornment from '../../assets/Footer Adornment.svg'


const useStyles = makeStyles(_theme => createStyles({
  footer: {
    backgroundColor: _theme.palette.common.arcBlue,
    width: "100%"
  },
  adornment: {
    width: "25em",
    zIndex: 1302,
    position: "relative",
    verticalAlign: "bottom",
    [_theme.breakpoints.down('md')]: {
      width: "21em"
    },
    [_theme.breakpoints.down('xs')]: {
      width: "15em"
    }
  }
}));

export default function Footer() {
  const classes = useStyles();



  return <footer className={classes.footer}>
   <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}/>
  </footer>

}