import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import wines from './wine7.png'
import './wineList.css'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';






const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),


  },
  card: {

    display: 'flex',
    flexDirection: 'column',



  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9


  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function WineList(props) {
  const classes = useStyles();

  const [searchText, setText] = useState("")


  return (
    <div>
      <CssBaseline />

      <main >
        <img className="wines" src={wines} alt="wineme" />
        <div> 
       
        <InputBase onChange={(e) => {
            console.log(e.target)
            setText(e.target.value)
          }}
          variant="contained"
            placeholder="Search…" style={{ border: '0.5px ridge #112A3B', borderRadius: '10px', padding: '3px' , marginLeft: '20px'}}>
            Search Review
          </InputBase>

           {/* <SearchIcon/>  */}
          </div>
        
        <Container className={classes.cardGrid} maxWidth="md" >
          
          <Grid container spacing={5} >
            {props.wineList.data.filter(fCard => fCard.Type.includes(searchText)).map((wines, index) => (

              <Grid item key={index} xs={12} sm={6} md={4}>

                <img src={wines.Image} className="bottles" />

                <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'serif' }}>
                  {wines.Name}
                </Typography>
                <Typography >
                  Country: {wines.Country}
                </Typography>
                <Typography>
                  Vintage: {wines.vintage}
                </Typography>
                <Typography>
                  Type: {wines.Type}
                </Typography>
                <Typography>
                  Raiting: {wines.rating}
                </Typography>
                <Link to="/reviews" style= {{textDecoration: 'none'}}>
                  <Button variant="contained"
                    color="primary"
                    style={{ textAlign:'center', align:'center',height: '22px',backgroundColor: 'white', borderRadius: '10px', color:'#112A3B' }}>
                    Review it
                    </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </div>
  );
}