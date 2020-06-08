import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  username = '';
  constructor(props) {
    super(props);
    this.state = {}
  }
  submitUserName = (event) => {
    console.log(this.username)
    this.props.takeUsername(this.username);
  };

  capturingUsername = (event) => {
    this.username = event.target.value;
  }

  render () {
    return (
      <div>
        <form className='login-form'>
          <input onChange={this.capturingUsername} id='username' placeholder='Enter your username'></input>
          <Link to='/BuildCharacter'>
            <button onClick={this.submitUserName} type='submit'>Enter!</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Login;