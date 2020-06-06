import React, {Component} from 'react';
import './App.css';
import {fetchData} from '../../ApiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    fetchData();
  } 

  render() {
    return (
      <main>
        <div>
          <h1>Make your character, yo!</h1>
        </div>
      </main>
    )
  }

}

export default App;
