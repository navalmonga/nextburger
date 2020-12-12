import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    background: 'url("../static/dynamicwang.jpg") top no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundBlendMode: 'difference',
    backgroundColor: 'rgba(255,255,255,0.1)',
    minHeight: '25vh',
    minWidth: '100vw',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    borderBottomRightRadius: '0.75rem',
    borderBottom: '1px solid rgba(77,79,83,0.55)',
    textAlign: 'center',
  },
  titleBox: {
    padding: '1rem 2rem 1rem 20rem',
    backgroundColor: 'rgba(77,79,83,0.55)',
    borderRadius: '0.75rem',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    padding: '1rem 2rem',
    color: '#fafafa',
    // backgroundColor: '#fafafa',
    // WebkitBackgroundClip: 'text',
    // WebkitTextFillColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  credit: {
    padding: 0,
    margin: 0,
    fontSize: 11,
    fontWeight: 500,
  },
  link: {
    color: '#fafafa',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}));

export default function HeroBanner({title, path}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <Typography variant="h6" color="inherit" align="center" className={classes.title}>
          <MuiLink color="textPrimary" href={path} className={classes.link}>
            {title}
          </MuiLink>
          <Typography variant="overline" color="inherit" className={classes.credit}>
            <MuiLink color="inherit" target="_blank" href={"https://patreon.com/fues"} className={classes.link}>
              support&nbsp;🍔
            </MuiLink>
          </Typography>
          <Typography variant="overline" color="inherit" className={classes.credit}>
            background by&nbsp;
            <MuiLink color="inherit" target="_blank" href={"https://unsplash.com/@dynamicwang"} className={classes.link}>
              @dynamicwang
            </MuiLink>
          </Typography>
        </Typography>
      </div>
    </div>
  );
}