import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from '../Login/Login';
import BuildCharacter from '../BuildChar/BuildCharacter';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  componentDidMount() {
    // this.fetchRaceInfo();
  } 

  logoutUser = () => {
    this.setState({username: ''})
  }

  setUsername = (name) => {
    console.log(name)
    this.setState({username: name})
  }

  render() {
    return (
      <main>
        <div>
          <h1>D&D Character Info</h1>
        </div>
        <Switch>
          <Route exact path='/' render={() =>
            <Login changeLoginStatus={this.changeLoginStatus} takeUsername={this.setUsername}/>
          }
          />
          {!this.state.username && <Redirect to="/" />}
          <Route path='/BuildCharacter' render={() =>
            <BuildCharacter username={this.state.username} logoutUser={this.logoutUser}/>
          }
          />
        </Switch>
      </main>
    )
  }

}

export default App;
