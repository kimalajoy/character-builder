import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import App from '../App/App'
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router} from "react-router-dom";

const renderApp = () => {
  return render(
    <Router>
      <App />
    </Router>
  )
}


describe('App', () => {
  it('', () => {
    
  });
  
  
});
