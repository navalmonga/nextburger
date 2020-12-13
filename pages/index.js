import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import HeroBanner from '../src/HeroBanner';
import SideNavigation from '../src/SideNavigation';
import FuesBrand from '../src/FuesBrand';

const burgerIcon = () => (
  <Tooltip title="NextBurger 🍔 ◦ Fues® US" style={{ display: 'block', margin: '0 auto' }}>
    <Link href="/">
      <svg width="32" height="32" style={{ marginLeft: '0px' }} viewBox="0 0 256 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', margin: '0 auto' }}>
        <path d="M231.734 153.169C229.236 152.315 226.614 151.882 223.974 151.889H63.9738C62.9129 151.889 61.8955 151.468 61.1454 150.718C60.3952 149.968 59.9738 148.95 59.9738 147.889C59.9738 146.829 60.3952 145.811 61.1454 145.061C61.8955 144.311 62.9129 143.889 63.9738 143.889H230.734C226.769 118.604 213.619 95.6685 193.801 79.4722C173.984 63.2758 148.889 54.956 123.321 56.1049C97.7521 57.2538 73.5051 67.7908 55.2197 85.6993C36.9343 103.608 25.8948 127.63 24.2138 153.169V153.169C19.5031 154.785 15.4117 157.826 12.5067 161.871C9.60157 165.916 8.02671 170.764 8.00034 175.744C7.97396 180.724 9.49739 185.589 12.3595 189.664C15.2215 193.74 19.2805 196.824 23.9738 198.489C26.5374 199.423 29.2455 199.897 31.9738 199.889H199.974C201.035 199.889 202.052 200.311 202.802 201.061C203.552 201.811 203.974 202.829 203.974 203.889C203.974 204.95 203.552 205.968 202.802 206.718C202.052 207.468 201.035 207.889 199.974 207.889H23.9738V239.889C23.9738 246.255 26.5024 252.359 31.0032 256.86C35.5041 261.361 41.6086 263.889 47.9738 263.889H207.974C214.339 263.889 220.443 261.361 224.944 256.86C229.445 252.359 231.974 246.255 231.974 239.889V198.489C236.667 196.824 240.726 193.74 243.588 189.664C246.45 185.589 247.974 180.724 247.947 175.744C247.921 170.764 246.346 165.916 243.441 161.871C240.536 157.826 236.444 154.785 231.734 153.169V153.169Z" fill="#4d4f53"/>
      </svg>
    </Link>
  </Tooltip>
);

export default function Index() {
  const [isCollapsed, setIsCollapsed] = useState(true);
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
      margin: isCollapsed? '2rem auto 2rem 12.5%': '2rem auto 2rem 18%',
      width: isCollapsed? '80vw': '75vw',
      boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 80px',
      transition: 'all 0.22s linear',
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
        <HeroBanner title="Home" path="/" />
        <Paper className={classes.textPaper}>
          <Box m={0} className={classes.heroBox}>
            { burgerIcon() }
            <Typography variant="h4" component="h1" align="center" id="brandName" gutterBottom>
              NextBurger 🍔
            </Typography
            ><Typography variant="h5" component="h1" align="center" color="textSecondary" gutterBottom>
              Next.js Starter Kit: Build ideas faster with burger&trade;
            </Typography>
            <Typography variant="h5" component="h1" gutterBottom>
              Getting Started
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
