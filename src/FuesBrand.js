import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  fuesBrand: {
    zIndex: 99,
    position: 'fixed',
    left: theme.spacing(2),
    bottom: '2rem',
    display: 'flex',
    flexGrow: 1,
    color: '#4d4f53',
    textTransform: 'uppercase',
    fontFamily: 'IBM Plex Mono, monospace',
    fontWeight: 700,
    fontSize: 16,
    transition: 'all 0.22s linear',
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
      fues<span>pro</span>&trade;
    </Link>
  );
}