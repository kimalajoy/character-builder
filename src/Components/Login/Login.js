import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component {
  username = '';
  constructor(props) {
    super(props);
    this.state = {}
  }
  submitUserName = (event) => {
    this.props.takeUsername(this.username);
  };

  capturingUsername = (event) => {
    this.username = event.target.value;
  }

  render () {
    return (
      <div className='login'>
        <div>
          <h1>D&D Character Info</h1>
        </div>
        <form className='login-form'>
          <input className='login-input' onChange={this.capturingUsername} id='username' placeholder='Enter your username'></input>
          <Link to='/BuildCharacter'>
            <button className='login-button' onClick={this.submitUserName} type='submit'>Enter!</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Login;