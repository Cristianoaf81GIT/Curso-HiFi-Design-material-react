import React from 'react';
import Lottie from 'react-lottie';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme, createStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lighBulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import documentsAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json'

const useStyles = makeStyles(theme => createStyles({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    paddingBottom: "10em"
  },
  itemContainer: {
    maxWidth: "40em"
  }
}));



export default function CustomSoftware(props) {
    const classes = useStyles();

    const documentsOptions = {
      loop: true,
        autoplay: false, 
        animationData: documentsAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }


    const scaleOptions = {
      loop: true,
        autoplay: false, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <Grid container direction="column" className={classes.mainContainer}>
            <Grid item container direction="row">
                <Grid 
                  item 
                  className={classes.arrowContainer} 
                  style={{ marginRight: "1em", marginLeft:"-3.5em" }}
                >
                    <IconButton 
                      component={Link} 
                      to="/services" 
                      style={{backgroundColor: 'transparent'}}
                      onClick={() => props.setSelectedIndex(0)}
                    >
                        <img src={backArrow} alt="Back to Services page"/>
                    </IconButton>
                </Grid>

                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="body1">
                            Custom Software Development
                        </Typography>
                    </Grid>
                </Grid>
                
                {/* comentado em baixo */}
                <Grid item className={classes.arrowContainer}>
                    <IconButton 
                      style={{backgroundColor: 'transparent'}} 
                      component={Link} 
                      to="/mobileapps"
                      onClick={() => props.setSelectedIndex(2)}
                    >
                        <img src={forwardArrow} alt="forward to iOS/Android App Development"/>
                    </IconButton>
                </Grid>


                <Grid item>
                    <Typography variant="body1" paragraph>
                    Whether we’re replacing old software or inventing new solutions,
                    Arc Development is here to help your business tackle technology.
                    </Typography>

                    <Typography variant="body1" paragraph>
                    Using regular commercial software leaves you with a lot of stuff
                    you don’t need, without some of the stuff you do need, and
                    ultimately controls the way you work. Without using any software
                    at all you risk falling behind competitors and missing out on huge
                    savings from increased efficiency.
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Our custom solutions are designed from the ground up with your
                    needs, wants, and goals at the core. This collaborative process
                    produces finely tuned software that is much more effective at
                    improving your workflow and reducing costs than generalized
                    options.
                    </Typography>
                    <Typography variant="body1" paragraph>
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
              style={{marginTop: "15em", marginBottom:"20em"}}
            >
             <Grid 
                item 
                container 
                direction="column" 
                alignItems="center"
                md style={{maxWidth: "40em"}}>
                  <Grid item>
                     <Typography variant="h4">Save Energy</Typography>
                  </Grid>
                  <Grid item>
                    <img src={lighBulb} alt="lightBulb"/>  
                  </Grid>
              </Grid>
              
              <Grid 
                item 
                container 
                direction="column" 
                md 
                alignItems="center"
                style={{maxWidth: "40em"}}>
                  <Grid item>
                     <Typography variant="h4">Save Time</Typography>
                  </Grid>
                  <Grid item>
                    <img src={stopwatch} alt="stopwatch"/>  
                  </Grid>
              </Grid>

              <Grid 
                item 
                container 
                direction="column" 
                md 
                alignItems="center"
                style={{maxWidth: "40em"}}>
                  <Grid item>
                     <Typography variant="h4">Save Money</Typography>
                  </Grid>
                  <Grid item>
                    <img src={cash} alt="cash"/>  
                  </Grid>
              </Grid>

            </Grid>
          
          <Grid item container direction="row">
              
              <Grid item container className={classes.itemContainer}>
                
                <Grid item container direction="column" md>
                  <Grid item>
                    <Typography variant="h4">
                      Digital documents & Data
                    </Typography>  
                  </Grid>  

                  <Grid item>
                    <Typography variant="body1" paragraph>
                      Reduce Errors. Reduce Waste. Reduce Costs.
                    </Typography>
                    <Typography variant="body1"  paragraph>
                      Billions are spent annually on the purchasing, printing, and
                      distribution of paper. On top of the massive environmental
                      impact this has, it causes harm to your bottom line as well.
                    </Typography>
                    <Typography variant="body1"  paragraph>
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
                      maxHeight: 325,
                      maxWidth: 275,
                      minHeight: 275
                    }}
                  />
                </Grid>

              </Grid>

              <Grid item container className={classes.itemContainer}>

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
                    <Typography variant="h4" align="right">
                      Scale
                    </Typography>  
                  </Grid>  

                  <Grid item>
                    <Typography variant="body1" paragraph align='right'>
                    Whether you’re a large brand, just getting started, or taking
                    off right now, our application architecture ensures pain-free
                    growth and reliability.
                    </Typography>
                    
                  </Grid>
                </Grid>               

              </Grid>

          </Grid>

        </Grid>
    );

}
