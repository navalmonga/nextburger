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
import ExampleGrid from '../src/ExampleGrid';
import FuesBrand from '../src/FuesBrand';

export default function Example() {
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
      minHeight: '200vh',
      display: 'flex',
      flexDirection: 'column',
      minWidth: '100vw',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
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
        '& $codeB': {
          padding: '0 1rem',
          backgroundColor: '#111111 !important',
        }
      }
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
      <SideNavigation isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setIsDark={handleSetTheme}/>
      <Grid item sm={12} md={12} className={classes.contentContainer}>
        <HeroBanner title="Example page" path="/" />
        <Paper className={classes.textPaper}>
          <Box m={0} className={classes.heroBox}>
            <Typography variant="h4" component="h1" gutterBottom id="title">
              🍔 Example page
            </Typography>
            <Typography variant="body1" component="p" color="secondary" gutterBottom>
              Below are community example pages built with @nextburger:
            </Typography>
            <ExampleGrid />
            <Link href="example" onClick={() => handleScrollUp('#title')} color="secondary">
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