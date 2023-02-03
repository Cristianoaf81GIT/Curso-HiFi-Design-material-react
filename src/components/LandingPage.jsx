import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import CallToAction from './ui/CallToAction';
import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: '1.5',
      color: theme.palette.common.arcBlue,
    },
    animation: {
      maxWidth: '50em',
      minWidth: '21em',
      marginTop: '2em',
      marginLeft: '10%',
      marginBottom: '2em',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '30em',
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
      backgroundColor: theme.palette.common.arcOrange,
      borderRadius: 50,
      height: 45,
      width: 145,
      marginRight: 40,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
    },
    buttonContainer: {
      marginTop: '1em',
    },
    learnButtonHero: {
      ...theme.typography.learnButton,
      fontSize: '0.9rem',
      height: 45,
      width: 145,
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
    mainContainer: {
      marginTop: '5em',
      [theme.breakpoints.down('md')]: {
        marginTop: '3em',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '2em',
      },
    },
    heroTextContainer: {
      minWidth: '21em',
      marginLeft: '1em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    specialText: {
      fontFamily: 'Pacifico',
      color: theme.palette.common.arcOrange,
    },
    subtitle: {
      marginBottom: '1em',
    },
    icon: {
      marginLeft: '2em',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    serviceContainer: {
      marginTop: '12em',
      [theme.breakpoints.down('sm')]: {
        padding: 25,
      },
    },
    revolutionBackground: {
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    },
    revolutionCard: {
      position: 'absolute',
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      padding: '10em',
      [theme.breakpoints.down('sm')]: {
        paddingTop: '8em',
        paddingBottom: '8em',
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 0,
        width: '100%',
      },
    },
    infoBackground: {
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      width: '100%',
    },
  })
);

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesSX = useMediaQuery(theme.breakpoints.down('xm'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/******Hero Block*****/}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid item className={classes.heroTextContainer}>
            <Typography variant="h2" alignItems="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  className={classes.estimateButton}
                  variant="contained"
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.arcBlue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'auto'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>

      {/***Custom software Block***/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/customsoftware"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="custom sofware icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/**iOS/Android block**/}

      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development.</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/**websites block**/}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search engines, built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              to="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.arcBlue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src={websitesIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      {/**revolution block**/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is
                    recipe for a revolution
                  </Typography>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/revolution"
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={10}
                      height={10}
                      fill={theme.palette.arcBlue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/**information block**/}
      <Grid
        container
        direction="row"
        style={{ height: '80em' }}
        alignItems="center"
        className={classes.infoBackground}
      >
        <Grid
          item
          container
          style={{
            // position: "absolute",
            textAlign: matchesSX ? 'center' : 'inherit',
          }}
          direction={matchesSM ? 'column' : 'row'}
        >
          <Grid
            item
            sm
            style={{
              marginLeft: matchesSX ? 0 : matchesSM ? '2em' : '5em',
            }}
          >
            <Grid
              container
              direction="column"
              style={{ marginBottom: matchesSX ? '10em' : 0 }}
            >
              <Typography variant="h2" style={{ color: 'white' }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Lets's get personal.</Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  style={{
                    color: theme.palette.common.white,
                    borderColor: theme.palette.common.white,
                  }}
                  className={classes.learnButton}
                  component={Link}
                  to="/about"
                  onClick={() => props.setValue(3)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.white}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm
            style={{
              marginRight: matchesSX ? 0 : matchesSM ? '2em' : '5em',
              textAlign: matchesSX ? 'center' : 'right',
            }}
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: 'white' }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">Say hello!</Typography>
              <Grid item>
                <Button
                  variant="outlined"
                  style={{
                    color: theme.palette.common.white,
                    borderColor: theme.palette.common.white,
                  }}
                  className={classes.learnButton}
                  component={Link}
                  to="/contact"
                  onClick={() => props.setValue(4)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.white}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/**Call-to-Action**/}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
