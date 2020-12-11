import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    // height: '300px',
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://i.imgur.com/Lvk9qTu.jpg)',
    // backgroundImage: 'url(https://i.imgur.com/bnrs0VT.jpg)',
    // backgroundImage: 'url(https://i.imgur.com/yCSUm3O.jpg)',
    // backgroundImage: 'url(https://i.imgur.com/LTrCHCl.jpg)',
  //  backgroundImage: 'url(https://i.imgur.com/EqXnuPz.jpg)',


    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    webkitBackgroundSize: 'cover',
    // backgroundSize: '100% 102%',
    
  
    
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${require("./option1.png")})` }}>
      {/* Increase the priority of the hero background image */}
      
      <div className={classes.overlay} />
      <Grid container>
     
        <Grid item md={6}>
         {/* {<img  src={option1}/>} */}
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Enjoy Wine, Review it and Learn.
              
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Our Wine expert will review a different wine each Winesday.Subscribe and get our weekly newsletter
            </Typography>
            <Link variant="subtitle1" href="#">
              
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};