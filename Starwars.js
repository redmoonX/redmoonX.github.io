import React, { Component } from 'react';
import Characters from './Characters.js';
import CharSheet from './CharSheet.js';
import './Starwars.css';

class Starwars extends Component {
  constructor() {
    super() 
    this.state = {
      Vehicles: false,
      Characters: false,
      Starships: false,
      Films: false,
      Planets: false,
      people: [] 
}
}   
    

    componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(users => this.setState({ people: users}));

  }



render() {
  console.log(this.state.people);
  const { people } = this.state.people;

  //  const stateToggle = (value) => {
  //   this.setState({ Characters: !value })
  // };

  // const nameToggle = () => { this.state.Characters ? 'seen' : 'unseen' };
  
// onclick perform class toggle function
//if false className = unseen   
//if true className = seen

  return (

<div className="App">
  <header className="App-header">
    <p>Star Wars Explorer</p>
    <button className={this.nameToggle} onClick={this.stateToggle}>Characters</button>
    <Characters className='unseen' people={people} />
    <CharSheet className='seen' />
  </header>
</div>


);
}
}


export default Starwars;

// App.js below ****
// import React, { Component } from 'react';
// import CardList from '../Components/CardList';
// import SearchBox from '../Components/SearchBox.js';
// import Scroll from '../Components/Scroll';
// import ErrorBoundary from '../Components/ErrorBoundary';
// import './app.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//         robots: [],
//         searchfield: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({ robots: users}));

//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
////   }

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter(robot =>{
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     })
//     return !robots.length ?
//       <h1>Loading</h1> :
//       ( 
//         <div className='tc'>
//           <h1 className='f1'>RoboFriends</h1>
//           <SearchBox searchChange={this.onSearchChange}/>
//           <Scroll>
//             <ErrorBoundary>
//             <CardList robots={filteredRobots} />
//             </ErrorBoundary>
//           </Scroll>
//         </div>
//       );
//   }
// }

// export default App;

// main react component w ~2 states
// repeatable button component
// each button as class of main component?


// react up-to-date packaging npm
// use local addresses to start
// planet vehicles people* films starships

// functionality:
// Default State: column of buttons that animate a feature when clicked and move to a 
// - predetermined area of page to expand into full-feature mode enabling exploration mode, (search? click? list? next?)

// Search State: on searchbox input, (select from nearest matches) page fully expands all features + fill re: search input 


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

