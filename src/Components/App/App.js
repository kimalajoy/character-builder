import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import BuildCharacter from '../BuildChar/BuildCharacter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      isLoggedIn: false,
      character: {}
    }
  }

  changeLoginStatus = () => {
    this.setState({isLoggedIn: (!this.state.isLoggedIn)})
  }

  componentDidMount() {
    // this.fetchRaceInfo();
  } 

  render() {
    return (
      <main>
        <div>
          <h1>Make your character, yo!</h1>
        </div>
        <Switch>
          <Route exact path='/' render={() =>
            <Login changeLoginStatus={this.changeLoginStatus} />
          }
          />
          <Route path='/BuildCharacter' render={() =>
            <BuildCharacter user={this.state.username} character={this.state.character}/>
          }
          />
        </Switch>
      </main>
    )
  }

}

export default App;
