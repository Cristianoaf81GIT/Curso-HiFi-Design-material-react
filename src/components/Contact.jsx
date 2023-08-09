import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme } from '@material-ui/core/styles';
import {useMediaQuery} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TetField from '@material-ui/core/TextField';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import { TextField } from '@material-ui/core';
import airplane from '../assets/send.svg';
import ButtonArrow from '../components/ui/ButtonArrow';


const useStyles = makeStyles(theme => ({
  background: {
      backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',    
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.arcBlue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.arcOrange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='row'>
      <Grid 
        item 
        container 
        direction='column' 
        justifyContent='center'
        lg={3} 
        md={3}
      >
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
      <Grid item container style={{maxWidth: "20em"}}>
        <Grid item>
          <TextField 
            label="Name" 
            id="name" value={name} 
            onChange={(event) => { setName(event.target.value); } }
          />
        </Grid>
        <Grid item>
           <TextField 
            label="Email" 
            id="email" 
            value={email}
            onChange={(event) => { setEmail(event.target.value); } }
          />
        </Grid>
        <Grid item> 
          <TextField 
            label="Phone" 
            id="phone" 
            value={phone}
            onChange={(event) => { setPhone(event.target.value); }}
          />
        </Grid>
      </Grid>
      <Grid item style={{maxWidth: '20em'}}>
        <TextField 
          InputProps={{ disableUndeline: true }}
          value={message}
          multiline
          className={classes.message}
          maxRows={10}
          id="message"
          onChange={(event) => { setMessage(event.target.value); } }
        />
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.sendButton}>
          Send message
          <img src={airplane} alt="paper airplane" style={{marginLeft: '1em'}}/>
        </Button>
      </Grid>
      <Grid item container className={classes.background} lg={9} alignItems='center'>
        <Grid
          item
          style={{
          marginLeft: matchesSm ? 0 : '5em',
          textAlign: matchesSm ? 'center' : 'inherit',
        }}
        >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesSm ? 'center' : undefined}
            >
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/revolution"
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          to="/estimate"
          onClick={() => props.setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
 
      </Grid>

    </Grid>
  );
}

