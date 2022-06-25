import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";

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
}));

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();

  return <Grid container>
    <Grid item>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">
            Simple Software.
            <br/> 
            Revolutionary results.
          </Typography>
          <Typography variant="subtitle2">
            Take advantage of the 21st century.
          </Typography>
          <Grid container item>
                <Button 
                  variant="outlined" 
                  // style={{
                  //   color: theme.palette.common.white, 
                  //   borderColor: theme.palette.common.white
                  // }}
                  className={classes.learnButton}
                >
                  <span style={{marginRight: 5}}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill={theme.palette.common.arcBlue}/>
                </Button>
              </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}