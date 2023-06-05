import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4
  },
   rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  avatar: {
    height: "25em",
    width: "25em"
  }
}));

const URL_SRC = 'https://github.com/zreecespieces/material-ui-course-create-react-app/blob/master/src/components/About.js';

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}>
        <Typography variant="h2">About us</Typography>
      </Grid>

      <Grid item container justifyContent='center' className={classes.rowContainer}>
        <Typography variant="h4" align="center" className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid item container className={classes.rowContainer} justifyContent="space-around">
        <Grid item>
        <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
          <Typography variant="h4" gutterBottom>History</Typography>  
        

         <Grid item>
          <Typography variant="body1" paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
            We're the new kid on the block.
          </Typography>

          <Typography variant="body1">
            Founded in 2019, we’re ready to get our hands on the world’s
            business problems.
          </Typography>

          <Typography variant="body1">
            It all started with one question: Why aren’t all businesses
            using available technology? There are many different answers to
            that question: economic barriers, social barriers, educational
            barriers, and sometimes institutional barriers.
          </Typography>

          <Typography variant="body1">
            We aim to be a powerful force in overcoming these obstacles.
            Recent developments in software engineering and computing power,
            compounded by the proliferation of smart phones, has opened up
            infinite worlds of possibility. Things that have always been
            done by hand can now be done digitally and automatically, and
            completely new methods of interaction are created daily. Taking
            full advantage of these advancements is the name of the game.
          </Typography>

          <Typography variant="body1">
            All this change can be a lot to keep up with, and that’s where
            we come in.
          </Typography>
          
        </Grid>
      </Grid>
    </Grid>
      <Grid item>    
        <Grid item container justifyContent="center" lg>
          <img src={history} alt="quill pen sitting on top of book" style={{ maxHeight: "22em" }}/>
        </Grid>
      </Grid>
     </Grid>
      <Grid item container direction="column" className={classes.rowContainer} alignItems='center'>
        <Grid item>
          <Typography variant="h4"  align='center' gutterBottom>Team</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Zachart Reece, Founder 
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alter="founder" src={profile} className={classes.avatar}/>
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="yearbook page about founder"/>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{maxWidth: "45em", padding: "1.25em"}}>
            <Typography variant="body1" align='center' paragraph>
              I tought myself basic coding from library book in third grade,
              and ever since then my passion has solely been set on learning -
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align='center' paragraph>
              Now I`m ready to apply everything I´ve learned, and to help
              others with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid item container direction="row" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="grey spotted puppy"/>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

