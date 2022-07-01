import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => createStyles({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')] : {
      marginBottom: "2em"
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height:80,
    width: 205,
    backgroundColor: theme.palette.common.arcOrange,
    fontSize: "1.5rem",
    marginRight: "5em"
  }
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid 
      container 
      // style={{ height: "60em" }} 
      alignItems="center" 
      justifyContent="space-between"
      className={classes.background}
    >
    <Grid item style={{ marginLeft: "5em"}}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">
            Simple Software.
            <br/> 
            Revolutionary results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
            Take advantage of the 21st century.
          </Typography>
          <Grid container item>
                <Button 
                  variant="outlined"                 
                  className={classes.learnButton}
                >
                  <span style={{marginRight: 5}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue}/>
                </Button>
              </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item >
      <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
    </Grid>
    
  </Grid>
}