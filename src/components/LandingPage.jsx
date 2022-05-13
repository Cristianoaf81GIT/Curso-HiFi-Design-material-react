import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';


const useStyles = makeStyles((theme) => createStyles({
  h2: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2.5rem",
    lineHeight: '1.5',
    color: theme.palette.common.arcBlue
  },
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    marginBottom: "2em"
  }
}));


export default function LandingPage() {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container justifyContent='flex-end'  alignItems="center" direction="row">
          <Grid item>
            <Typography variant="h2" alignItems="center">
                Bringing West Coast Technology<br/> 
                to the Midwest
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  Learn More
                  <ButtonArrow width={15} height={15} fill="red"/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie  options={defaultOptions} height={"100%"} width={"100%"}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}