import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }
  setUserName = (event) => {
    // event.preventDefault();
    let targetedProperty = event.target.id;
    this.setState({ [targetedProperty]: event.target.value }, () => {
    });

  };

  render () {
    return (
      <div>
        <form className='login-form'>
          <input onChange={this.setUserName} id='username' placeholder='Enter your username'></input>
          <Link to='/BuildCharacter'>
            <button  type='submit'>Enter!</button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Login;