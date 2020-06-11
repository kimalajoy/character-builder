import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import App from '../App/App'
import {render, fireEvent, getByText, debug} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router} from "react-router-dom";

describe('App', () => {

  it('renders', () => {
    const {getByText, getByPlaceholderText} = render(
    <Router>
      <App />
    </Router>
  );

    expect(getByText('D&D Character Info')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your username')).toBeInTheDocument()
  });
  

  it('Logs a user in', () => {
    const {getByText, getByPlaceholderText, debug} = render(
    <Router>
      <App />
    </Router>
  );

    const enterButton = getByText('Enter!');

    fireEvent.change(getByPlaceholderText('Enter your username'), {target: {value: 'Beans'}});

    fireEvent.click(enterButton);
    
    expect(getByText('Welcome to your Character Information Center, Beans!')).toBeInTheDocument();

  })

});