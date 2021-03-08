import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '../src/Link';
import FuesBrand from './FuesBrand';
import { FingerprintSharp, FiberSmartRecordSharp, ArrowForwardIosOutlined, ExposureNeg1Sharp, ExposurePlus1Sharp, ExposureZeroRounded } from '@material-ui/icons';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import ChangeHistoryOutlined from '@material-ui/icons/ChangeHistoryOutlined';
import DarkMode from '@material-ui/icons/HdrStrongSharp';
import LightMode from '@material-ui/icons/HdrWeakSharp';

const burgerIcon = () => (
  <Tooltip title="Your Brand Here - Fues Pro™">
    <Link href="/">
      <svg width="32" height="32" style={{ marginLeft: '0px' }} viewBox="0 0 256 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M231.734 153.169C229.236 152.315 226.614 151.882 223.974 151.889H63.9738C62.9129 151.889 61.8955 151.468 61.1454 150.718C60.3952 149.968 59.9738 148.95 59.9738 147.889C59.9738 146.829 60.3952 145.811 61.1454 145.061C61.8955 144.311 62.9129 143.889 63.9738 143.889H230.734C226.769 118.604 213.619 95.6685 193.801 79.4722C173.984 63.2758 148.889 54.956 123.321 56.1049C97.7521 57.2538 73.5051 67.7908 55.2197 85.6993C36.9343 103.608 25.8948 127.63 24.2138 153.169V153.169C19.5031 154.785 15.4117 157.826 12.5067 161.871C9.60157 165.916 8.02671 170.764 8.00034 175.744C7.97396 180.724 9.49739 185.589 12.3595 189.664C15.2215 193.74 19.2805 196.824 23.9738 198.489C26.5374 199.423 29.2455 199.897 31.9738 199.889H199.974C201.035 199.889 202.052 200.311 202.802 201.061C203.552 201.811 203.974 202.829 203.974 203.889C203.974 204.95 203.552 205.968 202.802 206.718C202.052 207.468 201.035 207.889 199.974 207.889H23.9738V239.889C23.9738 246.255 26.5024 252.359 31.0032 256.86C35.5041 261.361 41.6086 263.889 47.9738 263.889H207.974C214.339 263.889 220.443 261.361 224.944 256.86C229.445 252.359 231.974 246.255 231.974 239.889V198.489C236.667 196.824 240.726 193.74 243.588 189.664C246.45 185.589 247.974 180.724 247.947 175.744C247.921 170.764 246.346 165.916 243.441 161.871C240.536 157.826 236.444 154.785 231.734 153.169V153.169Z" fill="#4d4f53"/>
      </svg>
    </Link>
  </Tooltip>
);


export default function SideNavigation({isCollapsed, setIsCollapsed, isDark, setIsDark}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleSetIsDarkTheme = () => {
    setIsDark();
    setIsDarkTheme(!isDarkTheme);
  };
  const useStyles = makeStyles((theme) => ({
    sideContainer: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        height: '10rem',
        borderRight: 'none',
      },
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      height: '100vh',
      backgroundColor: isDarkTheme? '#111111': '#f5f8fe',
      color: isDarkTheme? '#f5f8fe': 'inherit',
      borderRight: '1px solid rgba(77,79,83,0.25)',
      overflow: 'hidden',
      padding: isCollapsed? '0': '0 24px 0 0',
    },
    sideControl: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    navBox: {
      margin: `2rem 0`,
    },
    sideLinks: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'row',
      },
      marginLeft: '8px',
    },
    sideNavLink: {
      marginLeft: '0 !important',
      borderRadius: '3px',
      padding: '8px 1rem',
      margin: '1rem 0',
      fontFamily: 'IBM Plex Mono, monospace',
      display: 'flex',  
      justifyContent: 'flex-start',
      alignItems: 'center',
      transition: 'all 0.22s linear',
      '&:hover': {
        textDecoration: 'none',
      },
      '&.active': {
        textDecoration: 'none',
      }
    },
    togIcon: {
      fontSize: 22,
      color: isDarkTheme? '#fafafa': '#4d4f53',
    },
    expandArrowIcon: {
      transform: 'rotate(-180deg)',
    },
    navLinkIcon: {
      transition: 'all 0.22s !important',
      fontSize: isCollapsed? 28: 24,
      color: "#4d4f53",
    }
  }));
  const classes = useStyles();
  return (
    <Grid item sm={12} md={2} className={classes.sideContainer}>
      <Box m={0} className={classes.navBox}>
        <Container className={classes.sideControl}>
          { burgerIcon() }
          <IconButton className={classes.togIcon} onClick={() => { setIsCollapsed(!isCollapsed) }} aria-label="collapse" >
            <ArrowForwardIosOutlined className={!isCollapsed? classes.expandArrowIcon: ''} style={{ fontSize: 18, transition: 'all 0.22s linear' }}/>
          </IconButton>
        </Container>
        <Container disableGutters className={classes.sideLinks}>
          <Tooltip title="Home">
            <Link href="/" color="inherit" activeClassName="active" className={classes.sideNavLink}>
              <HomeOutlined className={classes.navLinkIcon} />&nbsp;{!isCollapsed?'Home':''}
            </Link>
          </Tooltip>
          <Tooltip title="Example">
            <Link href="/example" color="inherit" activeClassName="active" className={classes.sideNavLink}>
              <ChangeHistoryOutlined className={classes.navLinkIcon} />&nbsp;{!isCollapsed?'Example':''}
            </Link>
          </Tooltip>
          <Tooltip title={isDarkTheme?'Light':'Dark'}>
            <Link href="#" onClick={() => handleSetIsDarkTheme()} color="inherit" activeClassName="active" className={classes.sideNavLink}>
            {isDarkTheme?<LightMode className={classes.navLinkIcon}  />:<DarkMode className={classes.navLinkIcon} />}&nbsp;{!isCollapsed?(isDarkTheme?'Light':'Dark'):''}
            </Link>
          </Tooltip>
          <FuesBrand />
        </Container>
      </Box>
    </Grid>
  )
}