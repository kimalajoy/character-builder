import React from 'react';
import ReactDOM from 'react-dom';
import BuildCharacter from '../BuildChar/BuildCharacter';
import {render, waitFor, getByText, fireEvent, getByPlaceholderText, cleanup, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router} from "react-router-dom";
import {fetchRaces, fetchClasses} from '../../ApiCalls';
jest.mock('../../ApiCalls', () => ({  
   __esModule: true, 
   fetchRaces: jest.fn(), 
   fetchClasses: jest.fn(), 
   }));

// jest.mock('../../ApiCalls.js');

describe('BuildCharacter', () => {
  it('should render', () => {
    
  const {getByText, getByTestId} = render (
    <BuildCharacter 
      username='Beans'
    />)
     

    expect(getByText('Welcome to your Character Information Center, Beans!')).toBeInTheDocument();
    expect(getByTestId('new-avatar-button')).toBeInTheDocument();
    expect(getByText('Choose your Race')).toBeInTheDocument();
    expect(getByText('Choose your Class')).toBeInTheDocument();

    // const header = getByRole('navigation')
  });

});

it('should fetch',  async () => {

  let raceData, classData;

  beforeEach(() => {
    
    raceData = [{
      "results": [
        {
          "index": "dragonborn",
          "name": "Dragonborn",
          "url": "/api/races/dragonborn"
		    }]
    }]

    classData = [{
      "count": 12,
      "results": [
        {
          "index": "barbarian",
          "name": "Barbarian",
          "url": "/api/classes/barbarian"
        }]
    }];

    fetchRaces.mockResolvedValueOnce(raceData);
    fetchClasses.mockResolvedValueOnce(classData);

  });

    const {getByText} = render(<BuildCharacter />);

    const races = await waitFor(() => getByText('Dragonborn'))

    expect(races).toBeInTheDocument();
});
