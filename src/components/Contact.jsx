import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import { TextField } from '@material-ui/core';
import airplane from '../assets/send.svg';
import ButtonArrow from '../components/ui/ButtonArrow';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '1em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
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
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
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
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const [emailHelper, setEmailHelper] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid Phone number');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    setOpen(true);
    const fakeRequest = () =>
      new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    fakeRequest()
      .then((res) => {
        setLoading(false);
        setTimeout(() => {
          setOpen(false);
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        }, 2000);
        console.log('result: %s', res);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  const ButtonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: '1em' }} />
    </React.Fragment>
  );

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        lg={4}
        xl={3}
        md={4}
        style={{
          marginBottom: matchesSm ? '1em' : matchesMD ? '5em' : 0,
          marginTop: matchesMD ? '5em' : 0,
        }}
      >
        <Grid container direction="column" style={{ padding: '1.5em' }}>
          <Typography
            alignItems={matchesMD ? 'center' : undefined}
            variant="h2"
            style={{ lineHeigh: 1 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? 'center' : undefined}
            style={{ color: theme.palette.common.arcBlue }}
          >
            We're Wating.
          </Typography>
          <Grid item container style={{ marginTop: '2em' }}>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{ marginRight: '0.5em' }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.arcBlue,
                  fontSize: '1rem',
                }}
              >
                <a
                  href="tel:55555555555"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container style={{ marginBottom: '2em' }}>
            <Grid item>
              <img
                src={emailIcon}
                alt="envelope"
                style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.arcBlue,
                  fontSize: '1rem',
                }}
              >
                <a
                  href="mailto:developer@email.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  developer@email.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" style={{ maxWidth: '20em' }}>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Email"
                id="email"
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper.length > 0 && emailHelper}
                fullWidth
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Phone"
                id="phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper.length > 0 && phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: '20em' }}>
            <TextField
              InputProps={{ disableUndeline: true }}
              value={message}
              multiline
              fullWidth
              className={classes.message}
              maxRows={10}
              id="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            style={{ marginTop: '2em' }}
          >
            <Button
              variant="contained"
              className={classes.sendButton}
              //              disabled={
              //                name.length === 0 ||
              //                message.length === 0 ||
              //                email.length === 0 ||
              //                phone.length === 0 ||
              //                phoneHelper.length !== 0
              //              }
              // onClick={() => setOpen(true)}
              onClick={() => onConfirm()}
            >
              {ButtonContents}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        style={{ zIndex: 1302 }}
        onClose={() => setOpen(false)}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSm
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            paddingRight: matchesXS
              ? 0
              : matchesSm
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom alignItems="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Name"
                id="name"
                value={name}
                fullWidth
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Email"
                id="email"
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper.length > 0 && emailHelper}
                fullWidth
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label="Phone"
                id="phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper.length > 0 && phoneHelper}
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: matchesXS ? '100%' : '20em' }}>
            <TextField
              InputProps={{ disableUndeline: true }}
              value={message}
              multiline
              fullWidth
              className={classes.message}
              maxRows={10}
              id="message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: '2em' }}
            alignItems="center"
            direction={matchesSm ? 'column' : 'row'}
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0
                }
                onClick={() => setOpen(true)}
              >
                {loading ? <CircularProgress size={30} /> : ButtonContents}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid
        item
        container
        className={classes.background}
        lg={8}
        xl={9}
        alignItems="center"
        justifyContent={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                alignItems={matchesMD ? 'center' : undefined}
              >
                Simple Software.
                <br />
                Revolutionary results.
              </Typography>
              <Typography
                alignItems={matchesMD ? 'center' : undefined}
                variant="subtitle2"
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st century.
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? 'center' : undefined}
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
