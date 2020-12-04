import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import SearchBar from "./components/searchbar"
// import CustomizedTimeline from "./components/body"
import wineme from "./wineme.png"
import AppFooter from "./components/footer"
import WineList from './components/wineList'
import { Route, Switch } from 'react-router-dom';
import Reviews from "./components/reviews"
import Blog from "./components/blog"


class App extends Component {
  constructor() {
    super()
    this.state = {
      wines:"",
      

    }
  }
  componentDidMount() {
    // console.log('mounted')

    let url = "https://wineoclock.herokuapp.com/wine"
    let url2="https://wineoclock.herokuapp.com/reviews"

    axios.get(url)
    .then((res) => {
      return res
    })
    .then((data)=> {
      this.setState({
        data: data
      })
    })
    axios.get(url2)
    .then((res) => {
      return res
    })
    .then((reviews)=> {
      this.setState({
        reviews: reviews
      })
    })
  }
  rerenderParentCallback(){
    console.log('updatedState')
    let url = "https://wineoclock.herokuapp.com/wine"
    let url2="https://wineoclock.herokuapp.com/reviews"

    axios.get(url)
    .then((res)=> {
      return res
    })
    .then((data)=> {
      this.setState({data: data})
    })
    axios.get(url2)
    .then((res) => {
      return res
    })
    .then((reviews)=> {
      this.setState({
        reviews: reviews
      })
    })
  }

  render() {
    // console.log(this.state.data)
    // console.log(this.state.reviews)
    

    return (
      <div>

        <SearchBar />
        <div>

        </div>
        <Switch>
          <Route exact path="/home">  
          <img className="wineme" src={wineme} alt="wineme" />
          </Route>

          <Route exact path="/winelist">
            
            <WineList wineList={this.state.data} renderParentCallback={this.rerenderParentCallback}/>
          
          </Route>

          <Route exact path="/reviews">
            <Reviews reviews={this.state.reviews}/>
          </Route>
          <Route exact path="/blog">
            <Blog/>
          </Route>

        </Switch>


        <div>

        </div>


        <AppFooter />




      </div>




    );
  }
}

export default App;
