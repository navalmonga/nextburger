import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeroBanner from '../src/HeroBanner';
import SideNavigation from '../src/SideNavigation';
import FuesBrand from '../src/FuesBrand';

export default function Index() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleSetTheme = () => {
    setIsDark(!isDark);
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: isDark? '#111111': '#f5f8fe',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },
    contentContainer: {
      overflowY: 'scroll',
      padding: 0,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '100vw',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      color: '#111111',
    },
    textPaper: {
      padding: '4rem 2rem',
      display: 'block',
      margin: isCollapsed? '2rem 10%': '2rem 15%',
      width: '65vw',
      boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 80px',
      transition: 'all 0.22s ease-in-out',
    },
    heroBox: {
      paddingLeft: '1rem',
    },
    link: {
      color: '#111111',
      opacity: 0.5,
      textDecoration: 'none',
      '&:active': {
        opacity: 1,
        textDecoration: 'none',
      },
      '&:hover': {
        opacity: 1,
        textDecoration: 'none',
      },
      codeBlk: {
        color: '#ffffff',
        '& $codeB': {
          padding: '0 1rem',
          backgroundColor: '#111111 !important',
        }
      },
      
    }
  }));
  const classes = useStyles();

  const handleScrollUp = (elId) => {
    const element = document.getElementById(elId);

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0
      });
    }, 100);

    console.log('here');
  }
  return (
    <Grid container className={classes.root} style={{ margin:0 }}>
      <SideNavigation isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setIsDark={handleSetTheme} />
      <Grid item sm={12} md={12} className={classes.contentContainer}>
        <HeroBanner title="Home page" path="/" />
        <Paper className={classes.textPaper}>
          <Box m={0} className={classes.heroBox}>
            <Typography variant="h4" component="h1" gutterBottom id="brandName">
              NextBurger 🍔
            </Typography>
            <Typography variant="body1" component="p" color="secondary" gutterBottom>
              A NextJS + MaterialUI boilerplate equipped with a custom CLI for page &amp; component creation, modification, and deletion. Deploy a front-end server-side rendered(SSR) application built and designed to be highly reusable, scalable, and tolerant in cloud environments. Visit nextburger.io for more information and steps on how to install.
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              CLI
            </Typography>
            <Typography variant="body1" component="p" color="secondary" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              NextJS + Material-UI
            </Typography>
            <Typography variant="body1" component="p" color="secondary" gutterBottom>
              This project was bootstrapped with the <a className={classes.link} href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs" alt="github">NextJS material-ui example.</a>
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              Quickstart
            </Typography>
            <Typography variant="body1" component="p" color="textPrimary" gutterBottom className={classes.codeBlk}>
              <pre className={classes.codeB}>git clone git@github.com:fuesorg/nextburger.git; cd nextburger</pre>
              In the project, simply run:
              <pre className={classes.codeB}>yarn install; yarn dev</pre>
              or
              <pre>npm install; npm run dev</pre>
            </Typography>
            <Link href="/" onClick={() => handleScrollUp('#brandName')} color="secondary">
              Go to the top of this page
            </Link>
            <ProTip />
            <Copyright />
            
          </Box>
        </Paper>
        <FuesBrand />
      </Grid>
    </Grid>
  );
}
