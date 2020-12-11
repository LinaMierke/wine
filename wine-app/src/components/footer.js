import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wine O'Clock
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black'

    // minHeight: '100vh',
  },
  main: {
    // marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    backgroundColor: 'black'
  },
  footer: {
    padding: theme.spacing(16, 2),
    marginTop: '0px',
    backgroundColor:'black',
    color: 'white',
    flexDirection: 'column',

  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
         
          
           <Copyright style={{position: 'center'}}/>
        </Container>
       
      </footer>
    </div>
  );
}