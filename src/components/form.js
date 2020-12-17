import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./form.css"
import { Link } from 'react-router-dom'





const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40ch',
      display: 'flex',
      align: 'center',
      transform: 'translate(180%, 0%)',
    },
  },
  button: {
    margin: '30px',
    align: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  button2: {
    margin: '30px',
    align: 'center',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',

  }
}));


export default function Form(props) {

  const classes = useStyles();

  // const [create, setCreate] = useState(true) 

  const [typeText, setTypeText] = useState("")
  const [paringText, setParingText] = useState("")
  const [scoreText, setScoreText] = useState("")
  const [reviewText, setReviewText] = useState("")
  const [priceText, setPriceText] = useState("")
  const [image, setImage] = useState("")

  

  return (
    <div>
     
      <form className={classes.root} noValidate autoComplete="off">
        <div>
        

          <TextField onChange={(e) => {
            console.log(e.target)
            setImage(e.target.value)
          }}
            id="outlined-textarea"
            label="Wine Picture"
            placeholder="Upload the URL picture here"
            multiline
            variant="outlined"
          />
          <TextField onChange={(e) => {
            setTypeText(e.target.value)
          }}
            id="outlined-textarea"
            label="Type"
            placeholder="White, Red, Rose"
            multiline
            variant="outlined"
          />
          <TextField onChange={(e) => {
            setParingText(e.target.value)
          }}
            id="outlined-textarea"
            label="What you paired with?"
            placeholder="Cheese, Lamb, Nuts"
            multiline
            variant="outlined"
          />
          <TextField onChange={(e) => {
            setPriceText(e.target.value)
          }}
            id="outlined-textarea"
            label="How much did you pay?"
            placeholder="10, 30..."
            multiline
            variant="outlined"
          />
          <TextField onChange={(e) => {
            setScoreText(e.target.value)
          }}
            id="outlined-textarea"
            label="Your score"
            placeholder="1 to 5"
            multiline
            variant="outlined"
          />
          <TextField onChange={(e) => {
            setReviewText(e.target.value)
          }}
            id="outlined-multiline-static"
            label="Your Review"
            placeholder="Tell about your experience with this wine"
            multiline
            rows={4}
            variant="outlined"
          />

        </div>
        <Button onClick={() => props.handleSubmit(typeText,paringText,scoreText,reviewText,priceText,image)}
          variant="contained"
          color="primary"
          style={{ backgroundColor: '#112A3B' }}
          className={classes.button}>
          Submit
      </Button>
      </form>
    </div>
  );
}

