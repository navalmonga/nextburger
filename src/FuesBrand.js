import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  fuesBrand: {
    zIndex: 99,
    position: 'fixed',
    right: '32px',
    top: '2rem',
    display: 'flex',
    flexGrow: 1,
    color: '#4d4f53',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: 16,
    fontFamily: 'IBM Plex Sans Condensed, sans-serif',
    transition: 'all 0.22s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      fontSize: 18,
      '& span': {
        color: '#ff5722',
      }
    }
  }
}));

export default function Copyright() {
  const classes=useStyles();
  return (
    <Link href="https://www.fues.us" target="_blank" className={classes.fuesBrand}>
      fues&reg;&nbsp;<span>us</span>
    </Link>
  );
}