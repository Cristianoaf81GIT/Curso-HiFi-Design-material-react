import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme, createStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lighBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import roots from "../assets/root.svg";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      maxWidth: "40em",
    },
    arrowContainer: {
      marginTop: "0.5em",
    },
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      // paddingTop: "2em",
      // paddingBottom: "10em",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
        // padintTop: "1em"
      },
    },
    itemContainer: {
      maxWidth: "40em",
    },
  })
);

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={backArrow} alt="Back to Services page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
            >
              Custom Software Development
            </Typography>
          </Grid>
        </Grid>

        {/* comentado em baixo */}
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt="forward to iOS/Android App Development"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Whether we’re replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>

          <Typography
            align={matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Using regular commercial software leaves you with a lot of stuff you
            don’t need, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="body1"
            paragraph
          >
            We create exactly what you what, exactly how you want it.
          </Typography>
        </Grid>

        {/*<Grid item className={classes.arrowContainer}>
                    <IconButton 
                      style={{backgroundColor: 'transparent'}} 
                      component={Link} 
                      to="/mobileapps"
                      onClick={() => props.setSelectedIndex(2)}
                    >
                        <img src={forwardArrow} alt="forward to iOS/Android App Development"/>
                    </IconButton>
                </Grid>*/}
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lighBulb} alt="lightBulb" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Digital documents & Data
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={false}
              style={{
                maxHeight: 275,
                maxWidth: 275,
                minHeight: 250,
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              isStopped={false}
              style={{
                maxHeight: 260,
                maxWidth: 289,
              }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : "right"}
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={roots}
              alt="tree roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
        </Grid>

        <Grid item alignItems="center">
          <Typography variant="h4" gutterBottom align="center">
            Root-cause Analisis
          </Typography>

          <Typography variant="body1" paragraph align="center">
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>

          <Typography variant="body1" align="center" paragraph>
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems={matchesMD ? "center" : undefined}
        direction={matchesMD ? "column" : "row"}
        justify="space-around"
        style={{ marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                Automation
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={false}
              style={{
                maxHeight: 290,
                maxWidth: 280,
              }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          md
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              isStopped={false}
              style={{
                maxHeight: 310,
                maxWidth: 155,
              }}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>

              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>

              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
