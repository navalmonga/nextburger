import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 80px',
    background: 'url("../static/pawel-unsplash.jpg") bottom no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '20rem',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingLeft: '4rem',
    borderBottomRightRadius: '0.75rem',
    textAlign: 'center',
  },
  titleBox: {
    padding: '1rem 2rem 1rem 8rem',
    backgroundColor: ' rgba(77,79,83,0.55)',
    boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 80px',
    borderRadius: '0.75rem',
  },
  title: {
    fontSize: '38px',
    fontWeight: 900,
    padding: '1rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.9)',
    opacity: 0.9,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  credit: {
    padding: 0,
    margin: 0,
    fontSize: 10,
  },
  link: {
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
          <MuiLink color="inherit" href={path} className={classes.link}>
            {title}
          </MuiLink>
          <Typography variant="overline" color="inherit" className={classes.credit}>
            Cover by @
            <MuiLink color="inherit" target="_blank" href={"https://unsplash.com/@pawel_czerwinski"} className={classes.link}>
              pawel_czerwinski
            </MuiLink>
          </Typography>
          <Typography variant="overline" color="inherit" className={classes.credit}>
            <MuiLink color="inherit" target="_blank" href={"https://patreon.com/fues"} className={classes.link}>
            support&rarr;&nbsp;🍔
            </MuiLink>
          </Typography>
        </Typography>
      </div>
    </div>
  );
}