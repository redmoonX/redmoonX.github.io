import React, { Component } from 'react';
import Characters from './Characters.js';
import DeetsJSON from './test.json'
import './App.css';
//this works!
class App extends Component {
  constructor() {
    super()
      this.state = { 
        robots: []
      }


  }

      // componentDidMount() {
        // fetch('./test.json').then(users => this.setState({ robots: users }))
        // }
        // .then(resp => resp.json())

      //   var data = require('./test.json');

      //   for(var i = 0; i < data.length; i++ )
      //   {
      //     var obj = data[i];
      //     console.log("Name: " + obj.first_name + ", " + obj.gender);
      //   }
      // }
  // componentDidMount() {
  //   fetch('https://api.myjson.com/bins/zvaar')
  //     .then(users => this.setState({ robots: users}));

  // }
  componentDidMount() {

}

render() {
// var gimmeDATA = () => jsonDATA.map(function() {return()});
  var giveitDATA = DeetsJSON;

  
    // const grabbIT = () => {fetch('./test.json').then(users => this.setState({ robots: users }))
    //     };
    //     grabbIT();
    // var dataDAMN = () => jsonDATA.map(users => this.setState({robots: users }));
    // const { robots, searchfield } = this.state;
    // const filteredRobots = () => { robots.map() };
    //(robot =>{return robot.id.toLowerCase().includes(searchfield.toLowerCase());
    
    // const filteredRobots = robots.map();
    //const filteredRobots = ( {robots} ) => JSON.parse(JSON.stringify(test));
    // const filteredRobots = robots.filter(robot =>{
    //   return robot.name;
    // })
    return ( 
        <div className='tc'>
          <h1 className='f1'>StarWars Explorer</h1>
            <Characters robots={giveitDATA} />
        </div>
      );
  }
}

export default App;

//   render() {
//     const { robots } = this.state;
//     // const testName = ({ robots }) => { return (robots.map());}
//     const filteredRobots = robots.filter(robot =>{
//       return (robot.name)
//     })
//   return (
//     <div>
//       <h1>StarWars Explorer</h1>
//       <Characters robots={filteredRobots} />
//       </div>
//   );
// }
// }
// export default App;
