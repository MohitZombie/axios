import './App.css';

import React, { Component } from 'react'
import Newsfach from './component/Newsfach';
// import Navbar from './component/Navbar';
// import News from './component/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Newsfach/>
       {/* <Navbar/>
       <News/> */}
      </div>
    )
  }
}
