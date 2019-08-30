import React, { Component } from 'react';
import './fonts/simple.ttf';
import './fonts/simple.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = { 
        robots: []
      }
  }


render() {

    
  require('./fonts/simple.css');
  require('./fonts/simple.ttf');
     return (
      <div>TESTFONT1
      <p className="jesusplz">testfont2</p>

      </div>
      )
        
  }
}
export default App;