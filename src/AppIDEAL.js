import React, { Component } from 'react';
import Characters from './Characters.js';
import './App.css';
import Homeworlds from './Homeworlds.js';
import Starships from './Starships.js';
import Vehicles from './Vehicles.js';
import Films from './Films.js';
// import DeetsJSON from './test.json'
//this works!
class App extends Component {
  constructor() {
    super()
      this.state = { 
        robots: [],
        // worlds: [],
        // ships: [],
        // vehix: [],
        // films: []
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
    fetch('https://swapi.co/api/people/1/')
    .then(response => response.json())
    .then(users => this.setState( { robots: users }));

    // fetch('https://swapi.co/api/planets/1/')
    // .then(response => response.json())
    // .then(users => this.setState( { worlds: users }));
    // fetch('https://swapi.co/api/starships/1/')
    // .then(response => response.json())
    // .then(users => this.setState( { ships: users }));
    // fetch('https://swapi.co/api/vehicles/1/')
    // .then(response => response.json())
    // .then(users => this.setState( { vehix: users }));
    // fetch('https://swapi.co/api/films/1/')
    // .then(response => response.json())
    // .then(users => this.setState( { films: users }));
    }

render() {
  // Characters
  console.log(this.state);
  const giveitDATA = this.state.robots;
  const nameJob = giveitDATA.robots.name;
  const genderJob = giveitDATA.robots.gender;
  const heightJob = giveitDATA.robots.height;
  const massJob = giveitDATA.robots.mass;
  const homewJob = giveitDATA.robots.homeworld;
  const homewFetchJob = () => {
    fetch(homewJob)
    .then(response => response.json())
    .then(world => this.setState({ worlds: world }));

  };
  homewFetchJob();
  const homewValueJob = this.state.worlds.name;
 
   // Homeworlds
  const giveitDATA1 = this.state.worlds;
  const nameJob1 = giveitDATA1.worlds.name;
  const genderJob1 = giveitDATA1.worlds.climate;
  const heightJob1 = giveitDATA1.worlds.terrain;
  const massJob1 = giveitDATA1.worlds.population;
  const homewJob1 = giveitDATA1.worlds.residents;
  // const homewFetchJob = () => {
  //   fetch(homewJob)
  //   .then(response => response.json())
  //   .then(world => this.setState({ worlds: world }));

  // };
  // homewFetchJob();
  // const homewValueJob = this.state.worlds.name;
  // Starships
  const giveitDATA2 = this.state.ships;
  const nameJob2 = giveitDATA2.ships.name;
  const genderJob2 = giveitDATA2.ships.model;
  const heightJob2 = giveitDATA2.ships.manufacturer;
  const massJob2 = giveitDATA2.ships.crew;
  const homewJob2 = giveitDATA2.ships.length;
  // const homewFetchJob = () => {
  //   fetch(homewJob)
  //   .then(response => response.json())
  //   .then(world => this.setState({ worlds: world }));

  // };
  // homewFetchJob();
  // const homewValueJob = this.state.worlds.name;
  // Vehicles
  const giveitDATA3 = this.state.vehix;
  const nameJob3 = giveitDATA3.vehix.name;
  const genderJob3 = giveitDATA3.vehix.model;
  const heightJob3 = giveitDATA3.vehix.manufacturer;
  const massJob3 = giveitDATA3.vehix.crew;
  const homewJob3 = giveitDATA3.vehix.length;
  // const homewFetchJob = () => {
  //   fetch(homewJob)
  //   .then(response => response.json())
  //   .then(world => this.setState({ worlds: world }));

  // };
  // homewFetchJob();
  // const homewValueJob = this.state.worlds.name;
  // Films
  const giveitDATA4 = this.state.films;
  const nameJob4 = giveitDATA4.robots.title;
  const genderJob4 = giveitDATA4.robots.episode_id;
  const heightJob4 = giveitDATA4.robots.release_date;
  const massJob4 = giveitDATA4.robots.opening_crawl;
  const homewJob4 = giveitDATA4.robots.characters;
  // const homewFetchJob = () => {
  //   fetch(homewJob)
  //   .then(response => response.json())
  //   .then(world => this.setState({ worlds: world }));

  // };
  // homewFetchJob();
  // const homewValueJob = this.state.worlds.name;


    return ( 
        <div className='tc'>
          <h1 className='f1'>StarWars Explorer</h1>
          <div className='f1'>
              <button className='f1'>Characters</button>
          
              <button className='f1'>Homeworlds</button>
            
              <button className='f1'>Starships</button>
            
              <button className='f1'>Vehicles</button>
           
              <button className='f1'>Films</button>
            
          </div>
            <div className='Characters'>
              <h2>Characters</h2>
                <Characters charName={nameJob} charHeight={heightJob} charMass={massJob} charHome={homewValueJob} charGender={genderJob}>Characters</Characters>
            </div>
            <div className='Homeworlds'>
              <h2>Homeworlds</h2>
                <Homeworlds charName={nameJob1} charHeight={heightJob1} charMass={massJob1} charHome={homewValueJob} charGender={genderJob1}>Characters</Homeworlds>
            </div>
            <div className='Starships'>
              <h2>Starships</h2>
                <Starships charName={nameJob2} charHeight={heightJob2} charMass={massJob2} charHome={homewValueJob} charGender={genderJob2}>Characters</Starships>
            </div>
            <div className='Vehicles'>
              <h2>Vehicles</h2>
                <Vehicles charName={nameJob3} charHeight={heightJob3} charMass={massJob3} charHome={homewValueJob} charGender={genderJob3}>Characters</Vehicles>
            </div>
            <div className='Films'>
              <h2>Films</h2>
                <Films charName={nameJob4} charHeight={heightJob4} charMass={massJob4} charHome={homewValueJob} charGender={genderJob4}>Characters</Films>
            </div>
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
