import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TetField from '@material-ui/core/TextField';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

const useStyles = makeStyles(theme => ({
  background: {
      backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',    
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='row'>
      <Grid item container direction='column' justifyContent='center' lg={3} md={3}>
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
      <Grid item container>
        <Grid item>
          <img src={phoneIcon} alt='phone' style={{marginRight: '0.5em'}}/>
        </Grid>
        <Grid item>
          <Typography variant='body1' style={{color: theme.palette.common.arcBlue, fontSize: '1rem'}}>
            (555) 555-5555
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item>
          <img src={emailIcon} alt='envelope' style={{marginRight: '0.5em', verticalAlign: 'bottom'}}/>
        </Grid>
        <Grid item>
          <Typography variant='body1' style={{color: theme.palette.common.arcBlue, fontSize: '1rem'}}>
            developer@email.com
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}>
  
      </Grid>

    </Grid>
  );
}

