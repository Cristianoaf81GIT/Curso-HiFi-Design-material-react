import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((_theme) =>
  createStyles({
    footer: {
      backgroundColor: _theme.palette.common.arcBlue,
      width: "100%",
      // position: "fixed",
      // bottom:0,
    },
    adornment: {
      width: "25em",
      zIndex: 1302,
      position: "relative",
      verticalAlign: "bottom",
      [_theme.breakpoints.down("md")]: {
        width: "21em",
      },
      [_theme.breakpoints.down("xs")]: {
        width: "15em",
      },
    },
    mainContainer: {
      position: "absolute",
    },
    link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
    gridItem: {
      margin: "3em",
    },
    icon: {
      height: "4em",
      width: "4em",
      [_theme.breakpoints.down("xs")]: {
        height: "2.5em",
        width: "2.5em",
      },
    },
    socialContainer: {
      position: "absolute",
      marginTop: "-6em",
      right: "1.5rem",
      [_theme.breakpoints.down("xs")]: {
        right: "0.6em",
      },
    },
  })
);

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                to="/services"
                className={classes.link}
              >
                Services
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                to="/customsoftware"
                className={classes.link}
              >
                Custom Software Development
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                to="/mobileapps"
                className={classes.link}
              >
                iOS/Android App Development
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                to="/websites"
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                The Revolution
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Vision
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Tecnology
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                to="/revolution"
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                About us
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                History
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                to="/about"
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.serValue(4)}
                to="/contact"
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid
        container
        className={classes.socialContainer}
        spacing={2}
        justify="flex-end"
      >
        <Grid
          item
          component={"a"}
          href="http://wwww.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>

        <Grid
          item
          component={"a"}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>

        <Grid
          item
          component={"a"}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
