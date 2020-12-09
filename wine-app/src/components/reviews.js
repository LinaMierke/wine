import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import reviews from "./winereview.png"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import "./reviews.css"
import Form from "./form"
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { CenterFocusStrong } from '@material-ui/icons';




const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cover: {
    width: 151,
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: '5%', // 16:9
  },
  cardContent: {
    // flexGrow: 1,
    // flexFlow: 'column',
    textAlign: 'center',
    // alignItems: 'center',
    // position:'relative',
    // float: 'right',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  paper: {
    padding: '6px 10px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Reviews(props) {
  const classes = useStyles();
  const [create, setCreate] = useState(false);
  const [searchText, setText] = useState("");
  const [newScore, setNewScore] = useState("")


  function handleDelete(id) {
    // console.log(id)
    fetch("https://wineoclock.herokuapp.com/reviews/delete/" + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }

    })
      .then(res => res.text())
      .then(res => {
        console.log(res);
        // props.rerenderParentCallback()
      })
  }
  function handleChange(e) {
    setNewScore(e.target.value)

  }

  function handleEdit(score) {
    console.log(score)
    fetch("https://wineoclock.herokuapp.com/reviews/reviews/" + score, {

      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        score: newScore
      })

    })
      .then(res => res.text())
      .then(res => console.log(res));
      // props.rerenderParentCallback()


  }



  return (

    <React.Fragment>

      <CssBaseline />
      {/*   
      {console.log(props.rerenderParentCallBack)} */}
      <div>
        <img className="wines" src={reviews} alt="reviews" />
      </div>

      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Timeline align="alternate">
              <TimelineItem>
                <TimelineOppositeContent>

                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="black">
                    <LocalBarIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Drink
            </Typography>
                    <Typography>Because it&apos;s awesome!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="" variant="outlined">
                    <LaptopMacIcon color="black" />
                  </TimelineDot>
                  <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Review
            </Typography>
                    <Typography>Because you love us!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem >
                <TimelineSeparator color="black">
                  <TimelineDot color="black">
                    <RepeatIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      Repeat
            </Typography>
                    <Typography>Because why not?!</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button

                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: '#112A3B' }}
                    onClick={() => create === false ? setCreate(true) : setCreate(false)}
                  >
                    Add Review
                  </Button>
                </Grid>
                <Grid item>
                  <InputBase onChange={(e) => {
                    console.log(e.target)
                    setText(e.target.value)
                  }} placeholder="Search…" style={{ border: '1px solid #112A3B', padding: '3px', borderRadius: '10px' }}>
                    Search Review
                  </InputBase>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {
          create === true
            ?
            <Form info={props.reviews.data} rerender={props.rerendeParentCallback} />
            :

            <Container className={classes.cardGrid} maxWidth="md">

              <Grid container spacing={4} className="grid">
                {props.reviews.data.filter(fCard => fCard.type.includes(searchText)).map((reviews, index) => (
                  <Grid item key={index} xs={2} sm={6} md={4}>
                    <Card className={classes.card} >
                      <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" precision={0.1} value={reviews.score} readOnly />
                      </Box>
                      
                      <img src={reviews.picture} className="picture" />
                      <CardMedia className={classes.cardMedia}

/>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" >
                          {reviews.name}
                        </Typography>
                        {/* <Typography>
                          {reviews.country}
                        </Typography> */}
                        <Typography>
                          Review : 
                          {reviews.review}
                        </Typography>
                        <Typography>
                        <div> Paring :</div>
                          {reviews.paring}
                        </Typography>
                        <Typography>
                          Type :
                          {reviews.type}
                        </Typography>
                        <Typography>
                         Score :
                          {reviews.score}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                    </Button>
                        <TextField placeholder={reviews.score} onChange={handleChange} />

                        <Button onClick={() => {
                          handleEdit(reviews.score)
                        }}
                          size="small" color="primary">
                          Edit
                    </Button>
                        <Button onClick={() => {
                          // console.log(reviews.id)
                          handleDelete(reviews._id)
                        }} size="small" color="primary">
                          Delete
                    </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
        }
      </main>

    </React.Fragment>
  );
}
