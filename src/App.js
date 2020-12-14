import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from "./components/searchbar"
import wineme from "./wineme.png"
import WineList from './components/wineList'
import { Route, Switch } from 'react-router-dom';
import Reviews from "./components/reviews"
import Blog from "./components/blog"
import LoginPic from "./components/loginpic"
import Footer from "./components/footer"
import SignUp from "./components/signup"

export default function App() {

  const [wines, setWines] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    let url = "https://wineoclock.herokuapp.com/wine"
    axios.get(url)
      .then((res) => {
        return res
      })
      .then((data) => {
        setWines(data)
      })
  }, [])

  useEffect(() => {
    const updateReviews = () => {
      // console.log("getting reviews")
      let url2 = "https://wineoclock.herokuapp.com/reviews"
      axios.get(url2)
        .then((res) => {
          return res
        })
        .then((res) => {
          setReviews(res)
        })
    }
    if (reviews) {
       updateReviews();
    }
    // console.log(reviews)
   
  }, [reviews])




  return (
    <div className="main">

      <SearchBar />
      <div>

      </div>
      <Switch>
        <Route exact path="/home">
          <img className="wineme" src={wineme} alt="wineme" />
        </Route>

        <Route exact path="/winelist">

          <WineList wineList={wines} />

        </Route>

        <Route exact path="/reviews">
          <Reviews reviews={reviews} />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/signin">
          {/* <SignIn /> */}
          <LoginPic reviews={reviews} />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>

      </Switch>

      <Footer />
      <div>

      </div>






    </div>




  );
}




