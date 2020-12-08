import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  fuesBrand: {
    zIndex: 99,
    position: 'fixed',
    left: '1.25rem',
    top: '1rem',
    display: 'flex',
    flexGrow: 1,
    color: '#4d4f53',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontStyle: 'italic',
    fontSize: 12,
    fontFamily: 'IBM Plex Sans Condensed, sans-serif',
    transition: 'all 0.22s ease-in-out',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.dark,
      fontSize: 16,
    }
  }
}));

export default function Copyright() {
  const classes=useStyles();
  return (
    <Link href="https://www.fues.us" target="_blank" className={classes.fuesBrand}>
      fues&nbsp;us&reg;
    </Link>
  );
}