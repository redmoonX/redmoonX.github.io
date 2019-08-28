import React, { Component } from 'react';
import Characters from './Characters.js';
import './App.css';
import Homeworlds from './Homeworlds.js';
import Starships from './Starships.js';
import Vehicles from './Vehicles.js';
import Films from './Films.js';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import Filmscroll from './Filmscroll.js';

// import Background from './Background.js';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = { 
        robots: [],
        allchars: [],
        charindex: 0,
        worldindex: 0,
        shipindex: 0,
        vehicleindex: 0,
        filmindex: 0,
        worlds: [],
        cworlds: [],
        ships: [],
        vehix: [],
        films: [],
        residents: [],
        cview: 'Cvisible',
        wview: 'Wvisible',
        sview: 'Svisible',
        vview: 'Vvisible',
        fview: 'Fvisible'
      }
  }

  // componentDidMount() {
  //   // fetch('https://swapi.co/api/people/6/')
  //   // .then(response => response.json())
  //   // .then(users => this.setState( { robots: users }));
  //   // fetch('https://swapi.co/api/planets/1/')
  //   // .then(response => response.json())
  //   // .then(users => this.setState( { worlds: users }));
  //   fetch('https://swapi.co/api/starships/2/')
  //   .then(response => response.json())
  //   .then(users => this.setState( { ships: users }));
  //   fetch('https://swapi.co/api/vehicles/4/')
  //   .then(response => response.json())
  //   .then(users => this.setState( { vehix: users }));
  //   fetch('https://swapi.co/api/films/1/')
  //   .then(response => response.json())
  //   .then(users => this.setState( { films: users }));
  //   }

render() {


    const self = this;
    async function apiGetAll () {
      const resp = await fetch('https://swapi.co/api/people/')
      const data = await resp.json()
      const detail = await data.results[self.state.charindex]
      const statehood = await self.setState( { allchars: detail } )
      return detail };
  apiGetAll();

    async function apiGetAll1 () {
      const resp = await fetch('https://swapi.co/api/planets/')
      const data = await resp.json()
      const detail = await data.results[self.state.worldindex]
      const statehood = await self.setState( { worlds: detail } )
      return detail };
  apiGetAll1();

      async function apiGetAll2 () {
      const resp = await fetch('https://swapi.co/api/starships/')
      const data = await resp.json()
      const detail = await data.results[self.state.shipindex]
      const statehood = await self.setState( { ships: detail } )
      return detail };
  apiGetAll2();

      async function apiGetAll3 () {
      const resp = await fetch('https://swapi.co/api/vehicles/')
      const data = await resp.json()
      const detail = await data.results[self.state.vehicleindex]
      const statehood = await self.setState( { vehix: detail } )
      return detail };
  apiGetAll3();

      async function apiGetAll4 () {
      const resp = await fetch('https://swapi.co/api/films/')
      const data = await resp.json()
      const detail = await data.results[self.state.filmindex]
      const statehood = await self.setState( { films: detail } )
      return detail };
  apiGetAll4();

// Characters
  const giveitDATA = this.state.allchars;
  const nameJob = giveitDATA.name;
  const genderJob = giveitDATA.gender;
  const heightJob = giveitDATA.height;
  const massJob = giveitDATA.mass;
  const homewJob = giveitDATA.homeworld;
  const homewFetchJob = () => {
    fetch(homewJob)
    .then(response => response.json())
    .then(world => this.setState({ cworlds: world }));
  };
  homewFetchJob();
  const homewcValueJob = this.state.cworlds.name;
  const homewValueJob = this.state.worlds.name;
  
  // Homeworlds
  const giveitDATA1 = this.state;
  const nameJob1 = giveitDATA1.worlds.name;
  const genderJob1 = giveitDATA1.worlds.climate;
  const heightJob1 = giveitDATA1.worlds.terrain;
  const massJob1 = giveitDATA1.worlds.population;
  // const homewJob1 = giveitDATA1.worlds.residents;

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
  // const homewJob4 = giveitDATA4.films.characters;

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
  const cButton = this.state.charindex;
  const wButton = this.state.worldindex;
  const sButton = this.state.shipindex;
  const vButton = this.state.vehicleindex;
  const fButton = this.state.filmindex;
    
    return (
        
        <div className='tc App Headertop'>
          <h1 className='f1'>Star Wars</h1>
          <h1 className='f1'>Explorer</h1>
          <div className='f1'>
            <ButtonToolbar>
              <Button variant="outline-secondary" className='f1' onClick={ () => this.setState({ cview: 'Cvisible', wview: 'Invisible', sview: 'Invisible', vview: 'Invisible', fview: 'Invisible'})}>Characters</Button>
              <Button variant="outline-secondary" className='f1' onClick={ () => this.setState({ wview: 'Wvisible', cview: 'Invisible', sview: 'Invisible', vview: 'Invisible', fview: 'Invisible'})}>Homeworlds</Button>
              <Button variant="outline-secondary" className='f1' onClick={ () => this.setState({ sview: 'Svisible', wview: 'Invisible', cview: 'Invisible', vview: 'Invisible', fview: 'Invisible'})}>Starships</Button>
              <Button variant="outline-secondary" className='f1' onClick={ () => this.setState({ vview: 'Vvisible', wview: 'Invisible', sview: 'Invisible', cview: 'Invisible', fview: 'Invisible'})}>Vehicles</Button>
              <Button variant="outline-secondary" className='f1' onClick={ () => this.setState({ fview: 'Fvisible', wview: 'Invisible', sview: 'Invisible', vview: 'Invisible', cview: 'Invisible'})}>Films</Button>
            </ButtonToolbar>
          </div>
          <div className='apptest'>
            <div className={viewToggle}>
              <div className='csstest'>
              <h2>Characters</h2>
                <Characters charName={nameJob} charHeight={heightJob} charMass={massJob} charHome={homewcValueJob} charGender={genderJob}>Characters</Characters>
            <div className='npbtn'>
            <ButtonToolbar className='npbtn'>
            { cButton > 0 ? (<Button variant='outline-danger' className='npbtn' onClick={() => this.setState({ charindex: this.state.charindex - 1 })}> Prev </Button>)
            : 
            ( <Button variant='outline-danger' className='npbtn'> Prev </Button>)
            }
            <div className='btnspace'>
            </div>
            { cButton < 9 ? (<Button variant='outline-primary' className='npbtn' onClick={() => this.setState({ charindex: this.state.charindex + 1 })}> Next </Button>)
            : 
            ( <Button variant='outline-primary' className='npbtn'> Next </Button>)
            }
            </ButtonToolbar>
            </div>
            </div>
            </div>
            <div className={viewToggle1}>
              <div className='csstest'>
              <h2>Homeworlds</h2>
                <Homeworlds charName={nameJob1} charHeight={heightJob1} charMass={massJob1} charHome={homewValueJob} charGender={genderJob1}>Characters</Homeworlds>
            <div className='npbtn'>
            <ButtonToolbar className='npbtn'>
            { wButton > 0 ? (<Button variant='outline-danger' onClick={() => this.setState({ worldindex: this.state.worldindex - 1 })}> Prev </Button>)
            : 
            ( <Button variant='outline-danger'> Prev </Button>)
            }
            <div className='btnspace'>
            </div>  
            { wButton < 9 ? (<Button variant='outline-primary' onClick={() => this.setState({ worldindex: this.state.worldindex + 1 })}> Next </Button>)
            : 
            ( <Button variant='outline-primary'> Next </Button>)
            }
            </ButtonToolbar>
            </div>
            </div>
            </div>
            <div className={viewToggle2}>
              <h2>Starships</h2>
                <Starships charName={nameJob2} charHeight={heightJob2} charMass={massJob2} charHome={homewJob2} charGender={genderJob2}>Characters</Starships>
            <div className='npbtn'>
            <ButtonToolbar className='npbtn'>
            { sButton > 0 ? (<Button variant='outline-danger' onClick={() => this.setState({ shipindex: this.state.shipindex - 1 })}> Prev </Button>)
            : 
            ( <Button variant='outline-danger'> Prev </Button>)
            }
            <div className='btnspace'>
            </div> 
            { sButton < 9 ? (<Button variant='outline-primary' onClick={() => this.setState({ shipindex: this.state.shipindex + 1 })}> Next </Button>)
            : 
            ( <Button variant='outline-primary'> Next </Button>)
            }
            </ButtonToolbar>
            </div>
            </div>
            <div className={viewToggle3}>
              <h2>Vehicles</h2>
                <Vehicles charName={nameJob3} charHeight={heightJob3} charMass={massJob3} charHome={homewJob3} charGender={genderJob3}>Characters</Vehicles>
            <div className='npbtn'>
            <ButtonToolbar className='npbtn'>
            { vButton > 0 ? (<Button variant='outline-danger' onClick={() => this.setState({ vehicleindex: this.state.vehicleindex - 1 })}> Prev </Button>)
            : 
            ( <Button variant='outline-danger'> Prev </Button>)
            }
            <div className='btnspace'>
            </div>          
            { vButton < 9 ? (<Button variant='outline-primary' onClick={() => this.setState({ vehicleindex: this.state.vehicleindex + 1 })}> Next </Button>)
            : 
            ( <Button variant='outline-primary'> Next </Button>)
            }
            </ButtonToolbar>
            </div>
            </div>
            <div className={viewToggle4}>
              <h2>Films</h2>
              
                <Films charName={nameJob4} charHeight={heightJob4} charMass={massJob4} charHome={homewValueJob} charGender={genderJob4}>Characters</Films>
            <div className='npbtn'>
            <ButtonToolbar className='npbtn'>
            { fButton > 0 ? (<Button variant='outline-danger' onClick={() => this.setState({ filmindex: this.state.filmindex - 1 })}> Prev </Button>)
            : 
            ( <Button variant='outline-danger'> Prev </Button>)
            }
            <div className='btnspace'>
            </div>             
            { fButton < 6 ? (<Button variant='outline-primary' onClick={() => this.setState({ filmindex: this.state.filmindex + 1 })}> Next </Button>)
            : 
            ( <Button variant='outline-primary'> Next </Button>)
            }
            </ButtonToolbar>
            </div>
          
            </div>
          </div>  
        </div>
      
            );
  }
}
export default App;