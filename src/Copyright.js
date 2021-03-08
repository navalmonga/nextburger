import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
}));

export default function Copyright() {
  const classes=useStyles();
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {/* {'Privacy Policy'}<br/>
      {'Terms and Conditions'}<br/> */}
      ⚡️&nbsp;
      {'© ' + new Date().getFullYear() + ' Fues Pro, LLC.'}<br />
    </Typography>
  );
}
