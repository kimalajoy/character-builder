import React, {Component} from 'react';
import {fetchRaces, fetchRaceDetails, fetchClasses, fetchClassDetails} from '../../ApiCalls';
import './BuildCharacter.css'

class BuildCharacter extends Component {
  constructor(props) {
    super(props)
    this.races = [];
    this.classes = [];
    this._isMounted = false;
    this.state = {
      id: this.getNewSeed(),
      isLoading: true,
      seed: this.getNewSeed(),
      character: {
        name: '',
        race: '',
        raceDetails: '',
        charClass: '',
        classDetails: ''
      }
    }
  }

  componentDidMount () {
    this._isMounted = true;
    this._isMounted && this.fetchRaceInfo();
    this._isMounted && this.fetchClass();
  }

  componentWillUnmount() {
   this._isMounted = false;
  }

  //Race
  fetchRaceInfo = async () => {
    let allRaces = await fetchRaces();
    Promise.all([allRaces]).then(allPromises => {
      this.races = allPromises[0].results;
      this._isMounted && this.setState({isLoading: false})
    });
  }

  getRaceDetails = async (race) => {
    let raceDetails = await fetchRaceDetails(race);
    Promise.all([raceDetails]).then(allPromises => {
      let character = this.state.character;
      character.raceDetails = allPromises[0]
      this.setState({character: character})

    })
  }

  setRace = (event) => {
    let character = this.state.character;
    character.race = event.target.value
    this.setState({character: character})
    this.getRaceDetails(character.race);
  }

  renderRaceDetails = () => {
    return(
      <div className='race-details'>
        <h1 data-testid='raceDetails' >Details for {this.state.character.raceDetails.name}</h1>
        <p>Age: {this.state.character.raceDetails.age}</p>
        <p>Size: {this.state.character.raceDetails.size}. {this.state.character.raceDetails.size_description}</p>
        <p>Speed: {this.state.character.raceDetails.speed}</p>
        <p>Alignment: {this.state.character.raceDetails.alignment}</p>
        <ul>Traits:
          {this.state.character.raceDetails.traits.map((trait, index) => 
            <li key={index}>{trait.name}</li>
          )}
        </ul>
      </div>
    )
  }

//class
  fetchClass = async () => {
    this.setState({isLoading: true});
    let allClasses = await fetchClasses();
    Promise.all([allClasses]).then(allPromises => {
      this.classes = allPromises[0].results
      this._isMounted && this.setState({isLoading: false})
    })
  }

  getClassDetails = async (characterClass) => {
    let classDetails = await fetchClassDetails(characterClass);
    Promise.all([classDetails]).then(allPromises => {
    let character = this.state.character;
    character.classDetails = allPromises[0]
    this.setState({character: character})
    })
  }

  setClass = (event) => {
    let character = this.state.character;
    character.charClass = event.target.value;
    this.setState({character: character})
    this.getClassDetails(character.charClass);
  }

  renderClassDetails = () => {
    return(
      <div className='class-details'>
        <h1>Details for {this.state.character.classDetails.name} class</h1>
        <h3>Hit Die:</h3>
        <p>{this.state.character.classDetails.hit_die}</p>
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

//Character Name
  capturingCharacterName = (event) => {
    let character = this.state.character;
    character.name = event.target.value;
    this.setState({character: character}) 
  }

//LocalStorage
  handleSave = () => {
    this.setState({isLoading: true});
    let savedCharacters = this.getSavedCharacters();
    savedCharacters[this.state.id] = this.state;
    localStorage.setItem(this.props.username, JSON.stringify(savedCharacters));
    this.setState({isLoading: false});
  }

  getSavedCharacters = () => {
    return JSON.parse(localStorage.getItem(this.props.username) || '{}')
  }

  renderSavedCharacters = () => {
    let savedCharacters = this.getSavedCharacters();
    return (
    Object.keys(savedCharacters).map((key, index) => 
      <div className="saved-avatar" key={index}>
        <h2>{savedCharacters[key].character.name}</h2>
        <h3>{savedCharacters[key].character.race}</h3>
        <h3>{savedCharacters[key].character.charClass}</h3>
        <img src={`https://avatars.dicebear.com/api/human/${savedCharacters[key].seed}.svg`} alt="avatar"/>
      </div>
    ))
  }

  render () {

    let raceDetails = this.state.character.raceDetails ? this.renderRaceDetails() : '';
    let classDetails = this.state.character.classDetails ? this.renderClassDetails() : '';

    return(
      <div className='character-info'>
        <header className='header'>
          <h1 className='greeting'>Welcome to your Character Information Center, {this.props.username}!</h1>
          <button className='logout-button' onClick={this.props.logoutUser}>LogOut</button>
        </header>
        <hr/>
        <div className='savedCharacters'>
          <h2>Previously Saved Characters:</h2>
          {this.renderSavedCharacters()}
        </div>
        <div className='create-a-avatar'>
          <img data-testid='new-avatar-button' className="avatar" src={`https://avatars.dicebear.com/api/human/${this.state.seed}.svg`} alt="avatar"/>
          <button onClick={this.setSeed}>Click to Generate a New Avatar</button>
        </div>
        <div className='create-a-character'>
          <div className='race'>
            <form  data-testid='race-options'>
              <label htmlFor='race-select'>Race</label>
              <select id='race-select' data-testid='select' defaultValue={this.state.character.race} onChange={this.setRace} >
              <option value='' disabled>Choose your Race</option>
                {this.races.map(race => 
                <option key={race.index} value={race.index}>{race.name}</option>)}
              </select>
            </form>
            {raceDetails}
          </div>
          <div className='characterClass'>
            <form data-testid='class-options'>
            <label htmlFor='class-select'>Class</label>
              <select id='class-select' defaultValue={this.state.character.charClass} onChange={this.setClass}>
              <option value='' disabled>Choose your Class</option>
                {this.classes.map(charClass => 
                <option key={charClass.index} value={charClass.index}>{charClass.name}</option>)}
              </select>
            </form>
            {classDetails}
          </div>
          <div className='characterSave'>
            <form>
              <input onChange={this.capturingCharacterName} placeholder='Enter a Name' type='text'></input>
            </form>
            <button className='save-button' onClick={this.handleSave}>Save</button>
          </div>
          </div>
      </div>
    )
  }

}


export default BuildCharacter;