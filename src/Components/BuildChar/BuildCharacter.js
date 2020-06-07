import React, {Component} from 'react';
import {fetchRaces} from '../../ApiCalls';


class BuildCharacter extends Component {
  constructor(props) {
    super(props)
    this.races = [];
      this.state = {
        isLoading: true,
        username: '',
        character: {}
    }
  }

  componentDidMount () {
    this.fetchRaceInfo();
  }

  fetchRaceInfo = async () => {
    let allRaces = fetchRaces()
    Promise.all([allRaces]).then(allPromises => {
      this.races = allPromises[0].results;
      this.setState({isLoading: false})
    })

  }


  render () {
    console.log('render this', this)
    return(
      <div>
        <div>
          <h1>Welcome to your character creator</h1>
        </div>
        <div>
          <img src="http://placekitten.com/150/150" alt="placeholder cat"/>
          <button>Click to Generate Random Character Avatar</button>
        </div>
        <div>
        <form>
          <input placeholder='Enter a Name' type='text'></input>
          <button>Click to Generate Random Name</button>
        </form>
        </div>
        <div>
          <form>
            <select>
              {this.races.map(race => 
              <option key={race.index} value={race.index}>{race.name}</option>)}
            </select>
          </form>
        </div>
      </div>
    )
  }

}


export default BuildCharacter;