import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppRoutes from "./AppRoutes";
import WOW from 'wowjs';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
      user_logged_in: false,
      admin_logged_in: false,
      showManuLinks: false
      
    };
  
}
componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();

}

render() {
  return <AppRoutes />;
}
}

export default App;
