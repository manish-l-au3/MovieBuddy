import React, { Component } from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider from "react-slick";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";

import store from "./store";

//-----------------
const photos = [{
  name : 'photo 1',
  url : "https://unsplash.com/photos/atsUqIm3wxo"  
},{
  name : 'photo2',
  url : " https://unsplash.com/photos/aY3KgDPBVA4"
},{
  name : 'photo 3',
  url : "https://unsplash.com/photos/eVqU1HTZL8E "
},{
  name : 'photo 4',
  url : "https://unsplash.com/photos/jtmwD4i4v1U "
}]
///-----------

class App extends Component {
  render() {
     
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows:true,
      slidesToScroll: 1,
      className: "slides"
    }

    return (
      <Provider store={store}>






        <Router>
          <div>
            <Navbar />

         <div>   
<slider {...settings}>

{photos.map((photo)=> {
  return ( 
    <div>
      <img width = "100%" src = {photo.url} alt="sample try"/>
    </div>
  )
})}

</slider>
</div>


            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
