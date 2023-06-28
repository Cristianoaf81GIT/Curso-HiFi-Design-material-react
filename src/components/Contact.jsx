import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TetField from '@material-ui/core/TextField';
import background from '../assets/background.jpg'; 

const useStyles = makeStyles(theme => ({
  background: {
      backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    // width: '100%',
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='row'>
      <Grid item container direction='column' lg={3}>
        <Typography 
          variant='h2' 
          style={{lineHeigh: 1}}
        >
          Contact Us
        </Typography>
        <Typography 
          variant='body1' 
          style={{color: theme.palette.common.arcBlue}}
        >
          We're Wating.
        </Typography>
      </Grid>
      <Grid item container className={classes.background} lg={9}>

      </Grid>

    </Grid>
  );
}

