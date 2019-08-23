import React, { Component } from 'react';
import Characters from './Characters.js';
import './App.css';
import Homeworlds from './Homeworlds.js';
import Starships from './Starships.js';
import Vehicles from './Vehicles.js';
import Films from './Films.js';

class App extends Component {
  constructor() {
    super()
      this.state = { 
        robots: [],
        worlds: [],
        cworlds: [],
        ships: [],
        vehix: [],
        films: [],
        residents: [],
        cview: 'Invisible',
        wview: 'Invisible',
        sview: 'Invisible',
        vview: 'Invisible',
        fview: 'Invisible'
      }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/6/')
    .then(response => response.json())
    .then(users => this.setState( { robots: users }));
    fetch('https://swapi.co/api/planets/1/')
    .then(response => response.json())
    .then(users => this.setState( { worlds: users }));
    fetch('https://swapi.co/api/starships/2/')
    .then(response => response.json())
    .then(users => this.setState( { ships: users }));
    fetch('https://swapi.co/api/vehicles/4/')
    .then(response => response.json())
    .then(users => this.setState( { vehix: users }));
    fetch('https://swapi.co/api/films/1/')
    .then(response => response.json())
    .then(users => this.setState( { films: users }));
    }

render() {
  // Characters
  const giveitDATA = this.state;
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
  const giveitDATA1 = this.state;
  const nameJob1 = giveitDATA1.worlds.name;
  const genderJob1 = giveitDATA1.worlds.climate;
  const heightJob1 = giveitDATA1.worlds.terrain;
  const massJob1 = giveitDATA1.worlds.population;
  const homewJob1 = giveitDATA1.worlds.residents;
  // const homewFetchJob1 = giveitDATA1.worlds.residents.map(url => fetch(url)
  //   .then(response => response.json())
  //   .then(value => this.setState({ residents: value })));
  
  // homewFetchJob1();
  // const homewValueJob1 = this.state.residents.name;
  // console.log(this.state);
  // console.log(homewJob1);
  // Starships
  const giveitDATA2 = this.state;
  const nameJob2 = giveitDATA2.ships.name;
  const genderJob2 = giveitDATA2.ships.model;
  const heightJob2 = giveitDATA2.ships.manufacturer;
  const massJob2 = giveitDATA2.ships.crew;
  const homewJob2 = giveitDATA2.ships.length;

  // Vehicles
  const giveitDATA3 = this.state;
  const nameJob3 = giveitDATA3.vehix.name;
  const genderJob3 = giveitDATA3.vehix.model;
  const heightJob3 = giveitDATA3.vehix.manufacturer;
  const massJob3 = giveitDATA3.vehix.crew;
  const homewJob3 = giveitDATA3.vehix.length;

  // Films
  const giveitDATA4 = this.state;
  const nameJob4 = giveitDATA4.films.title;
  const genderJob4 = giveitDATA4.films.episode_id;
  const heightJob4 = giveitDATA4.films.release_date;
  const massJob4 = giveitDATA4.films.opening_crawl;
  const homewJob4 = giveitDATA4.films.characters;

  // View
  const viewToggleCalc = this.state;
  const viewToggle = viewToggleCalc.cview;
  const viewToggleCalc1 = this.state;
  const viewToggle1 = viewToggleCalc1.wview;
    const viewToggleCalc2 = this.state;
  const viewToggle2 = viewToggleCalc2.sview;
    const viewToggleCalc3 = this.state;
  const viewToggle3 = viewToggleCalc3.vview;
    const viewToggleCalc4 = this.state;
  const viewToggle4 = viewToggleCalc4.fview;
    

    return ( 
        <div className='tc'>
          <h1 className='f1'>StarWars Explorer</h1>
          <div className='f1'>
              <button className='f1' onClick={ () => this.setState({ cview: 'Visible'})}>Characters</button>
              <button className='f1' onClick={ () => this.setState({ wview: 'Visible'})}>Homeworlds</button>
              <button className='f1' onClick={ () => this.setState({ sview: 'Visible'})}>Starships</button>
              <button className='f1' onClick={ () => this.setState({ vview: 'Visible'})}>Vehicles</button>
              <button className='f1' onClick={ () => this.setState({ fview: 'Visible'})}>Films</button>
          </div>
            <div className={viewToggle}>
              <h2>Characters</h2>
                <Characters charName={nameJob} charHeight={heightJob} charMass={massJob} charHome={homewValueJob} charGender={genderJob}>Characters</Characters>
            </div>
            <div className={viewToggle1}>
              <h2>Homeworlds</h2>
                <Homeworlds charName={nameJob1} charHeight={heightJob1} charMass={massJob1} charHome={homewValueJob} charGender={genderJob1}>Characters</Homeworlds>
            </div>
            <div className={viewToggle2}>
              <h2>Starships</h2>
                <Starships charName={nameJob2} charHeight={heightJob2} charMass={massJob2} charHome={homewValueJob} charGender={genderJob2}>Characters</Starships>
            </div>
            <div className={viewToggle3}>
              <h2>Vehicles</h2>
                <Vehicles charName={nameJob3} charHeight={heightJob3} charMass={massJob3} charHome={homewValueJob} charGender={genderJob3}>Characters</Vehicles>
            </div>
            <div className={viewToggle4}>
              <h2>Films</h2>
                <Films charName={nameJob4} charHeight={heightJob4} charMass={massJob4} charHome={homewValueJob} charGender={genderJob4}>Characters</Films>
            </div>
        </div>
            );
  
  }
}

export default App;