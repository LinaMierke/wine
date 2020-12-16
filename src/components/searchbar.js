import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>

          </Typography>

          <Link to="/" style={{color:"white",textDecoration: 'none'}}>
            <Button color="inherit">Home</Button>
          </Link>


          <Link to="/winelist" style={{color:"white",textDecoration: 'none'}}>
            <Button color="inherit">
              Wines</Button>
          </Link>

          <Link to="/reviews" style={{color:"white",textDecoration: 'none'}}>
            <Button color="inherit">Reviews</Button>
          </Link>

          <Link to="/blog" style={{color:"white", textDecoration: 'none'}}>
            <Button color="inherit">Blog</Button>

          </Link>
          <Link to="/signin" style={{color:"white", textDecoration: 'none'}}>
            <Button color="inherit">Sign in</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
