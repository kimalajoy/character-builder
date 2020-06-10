import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../Login/Login';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router} from "react-router-dom";

const mockUserSubmit = jest.fn();

const renderLogin = () => {
  return render(
    <Router>
      <Login takeUsername={mockUserSubmit}/>
    </Router>
  )
}

describe('login', () => {

  it('renders correctly', () => {

    const {getByText, getByPlaceholderText} = renderLogin();

    expect(getByText('D&D Character Info')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter your username')).toBeInTheDocument()
  });
  

  it('Takes in a username', () => {
    
    const {getByPlaceholderText, getByText} = renderLogin();
    const enterButton = getByText('Enter!');

    fireEvent.change(getByPlaceholderText('Enter your username'), {target: {value: 'Beans'}});

    fireEvent.click(enterButton);

    expect(mockUserSubmit).toHaveBeenCalled();
    expect(mockUserSubmit).toHaveBeenCalledWith('Beans')
  });
  
});
