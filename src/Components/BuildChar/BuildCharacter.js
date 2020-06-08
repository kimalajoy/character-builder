import React, {Component} from 'react';
import {fetchRaces, fetchRaceDetails, fetchClasses, fetchClassDetails} from '../../ApiCalls'; 

class BuildCharacter extends Component {
  constructor(props) {
    super(props)
    this.races = [];
    this.classes = [];
    this.state = {
      isLoading: true,
      username: '',
      seed: this.getNewSeed(),
      character: {
        race: '',
        raceDetails: '',
        charClass: '',
        classDetails: ''
      }
    }
  }

  componentDidMount () {
    this.fetchRaceInfo();
    this.fetchClass();
  }

  //Race
  fetchRaceInfo = async () => {
    let allRaces = await fetchRaces();
    Promise.all([allRaces]).then(allPromises => {
      this.races = allPromises[0].results;
      this.setState({isLoading: false});
    });
  }

  getRaceDetails = async (race) => {
    let raceDetails = await fetchRaceDetails(race);
    Promise.all([raceDetails]).then(allPromises => {
    this.setState({character: {raceDetails: allPromises[0]}});
    })
  }

  setRace = (event) => {
    let race = event.target.value;
    this.setState({character: {race: race} })
    this.getRaceDetails(race);
  }

//class
  fetchClass = async () => {
    this.setState({isLoading: true});
    let allClasses = await fetchClasses();
    Promise.all([allClasses]).then(allPromises => {
      this.classes = allPromises[0].results
      this.setState({isLoading: false});
    })
  }

  getClassDetails = async (characterClass) => {
    console.log(characterClass)
    let classDetails = await fetchClassDetails(characterClass);
    Promise.all([classDetails]).then(allPromises => {
    this.setState({character: {classDetails: allPromises[0]}})
    })
  }

  setClass = (event) => {
    let classSelection = event.target.value;
    this.setState({character: {charClass: classSelection}})
    this.getClassDetails(classSelection);
  }

  renderRaceDetails = () => {
    return(
      <div>
        <h1>Details for {this.state.character.raceDetails.name}</h1>
        <p>Age: {this.state.character.raceDetails.age}</p>
        <p>Size: {this.state.character.raceDetails.size}. {this.state.character.raceDetails.size_description}</p>
        <p>Speed: {this.state.character.raceDetails.speed}</p>
        <p>Alignment: {this.state.character.raceDetails.alignment}</p>
        <ul>
          {this.state.character.raceDetails.traits.map((trait, index) => 
            <li key={index}>{trait.name}</li>
          )}
        </ul>
      </div>
    )
  }

  renderClassDetails = () => {
    return(
      <div>
        <h1>Details for {this.state.character.classDetails.name} class</h1>
        <h3>Hit Die: {this.state.character.classDetails.hit_die}</h3>
        <h3>Proficiencies:</h3>
        <ul>
          {this.state.character.classDetails.proficiencies.map((choice, index) => 
            <li key={index}>{choice.name}</li>
          )}
        </ul>
      </div>
    )
  }

//Avatar
  setSeed = () => {
   this.setState({seed: this.getNewSeed()})
  } 

  getNewSeed = () => {
    return Math.floor(Math.random() * 1000)
  }

  render () {
    console.log('raceDetails', this.state.character.raceDetails);
    console.log('classDetails', this.state.character.classDetails);

    let raceDetails = this.state.character.raceDetails ? this.renderRaceDetails() : '';
    let classDetails = this.state.character.classDetails ? this.renderClassDetails() : '';

    return(
      <div>
        <div>
          <h1>Welcome to your Character Information Center</h1>
        </div>
        <div>
          <img className="avatar" src={`https://avatars.dicebear.com/api/human/${this.state.seed}.svg`} alt="avatar"/>
          <button onClick={this.setSeed}>Click to Generate a New Character Avatar</button>
        </div>
        <div>
        <form>
          <input placeholder='Enter a Name' type='text'></input>
          <button>Submit</button>
        </form>
        </div>
        <div className='race'>
          <form>
            <select defaultValue={this.state.character.race} onChange={this.setRace}>
            <option value='' disabled>Choose your Race</option>
              {this.races.map(race => 
              <option key={race.index} value={race.index}>{race.name}</option>)}
            </select>
          </form>
          {raceDetails}
        </div>
        <div className='characterClass'>
          <form>
            <select defaultValue={this.state.character.charClass} onChange={this.setClass}>
            <option value='' disabled>Choose your Class</option>
              {this.classes.map(charClass => 
              <option key={charClass.index} value={charClass.index}>{charClass.name}</option>)}
            </select>
          </form>
          {classDetails}
        </div>
      </div>
    )
  }

}


export default BuildCharacter;