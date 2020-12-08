import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem auto',
  },
  gridCard: {
    minHeight: '6rem',
    padding: '2rem 4rem',
    border: '1px solid rgba(77,79,83,0.25)',
    borderRadius: '0.75rem',
    margin: '3rem 1rem',
    transition: 'all 0.22s ease-in-out',
    '&:hover': {
      boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 20px',
      transform: 'translateY(-10px)',
    }
  },
  gridHeading: {
    fontWeight: 500,
    fontSize: 18,
  },
  gridBg: {
    flexGrow: 0.5,
    backgroundColor: '#ff0000',
    width: '10rem',
    height: '6rem',
    marginRight: '2rem',
    marginTop: '-2rem',
    borderRadius: '0.75rem',
  },
}));

export default function ExampleGrid() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12} md={5} className={classes.gridCard}>
        <Grid container spacing={0}>
          <Grid item className={classes.gridBg}>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              component="h4"
              color="textPrimary"
              className={classes.gridHeading}
            >This is an example page</Typography>
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <MuiLink color="inherit" href="https://www.fues.us">
              ⚡️ Powered by Fues.&trade;&nbsp;
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} className={classes.gridCard}>
        <Grid container spacing={0}>
          <Grid item className={classes.gridBg}>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              component="h4"
              color="textPrimary"
              className={classes.gridHeading}
            >This is an example page</Typography>
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <MuiLink color="inherit" href="https://www.fues.us">
              ⚡️ Powered by Fues.&trade;&nbsp;
            </MuiLink>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} className={classes.gridCard}>
        <Grid container spacing={0}>
          <Grid item className={classes.gridBg}>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              component="h4"
              color="textPrimary"
              className={classes.gridHeading}
            >This is an example page</Typography>
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <MuiLink color="inherit" href="https://www.fues.us">
              ⚡️ Powered by Fues.&trade;&nbsp;
            </MuiLink>
            </Grid>
          </Grid>
      </Grid>
      <Grid item xs={12} md={5} className={classes.gridCard}>
        <Grid container spacing={0}>
          <Grid item className={classes.gridBg}>
          </Grid>
          <Grid item>
            <Typography
              variant="overline"
              component="h4"
              color="textPrimary"
              className={classes.gridHeading}
            >This is an example page</Typography>
            <Typography
              variant="body1"
              component="p"
              color="textSecondary"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
            <MuiLink color="inherit" href="https://www.fues.us">
              ⚡️ Powered by Fues.&trade;&nbsp;
            </MuiLink>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}