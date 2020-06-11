import React from 'react';
import ReactDOM from 'react-dom';
import BuildCharacter from '../BuildChar/BuildCharacter';
import {render, waitFor, getByText, fireEvent, getByPlaceholderText, cleanup, getByTestId, getByLabelText, findByText, findByDisplayValue} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter as Router} from "react-router-dom";
import {fetchRaces, fetchClasses, fetchRaceDetails, fetchClassDetails} from '../../ApiCalls';
import {allRaceData, raceDetailData, allClassData, classDetailData} from '../../mockData';

jest.mock('../../ApiCalls.js');

describe('BuildCharacter', () => {
  fetchRaces.mockResolvedValue(allRaceData);
  fetchClasses.mockResolvedValue(allClassData);
  fetchRaceDetails.mockResolvedValue(raceDetailData);
  fetchClassDetails.mockResolvedValue(classDetailData);

  it('should render', () => {
    
  const {getByText, getByTestId, debug} = render (
    <BuildCharacter 
      username='Beans'
    />)

    expect(getByText('Welcome to your Character Information Center, Beans!')).toBeInTheDocument();
    expect(getByTestId('new-avatar-button')).toBeInTheDocument();
    expect(getByText('Previously Saved Characters:')).toBeInTheDocument();
    expect(getByText('Choose your Race')).toBeInTheDocument();
    expect(getByText('Choose your Class')).toBeInTheDocument();

  });

});

it('should fetch',  async () => {
   
   const {getByText, getByTestId, debug, container} = render (
    <BuildCharacter 
      username='Beans'
    />)
  
  const races = await waitFor(() => getByTestId('race-options'))

  const classes = await waitFor(() => getByTestId('class-options'))

  expect(races).toBeInTheDocument();
  expect(classes).toBeInTheDocument();


  expect(getByText('Choose your Race')).toBeInTheDocument();
  
  fireEvent.select(getByText('Dragonborn'));
  fireEvent.select(getByText('Barbarian'));
  
  expect(getByText('Dragonborn')).toBeInTheDocument();
  expect(getByText('Barbarian')).toBeInTheDocument(); 
  
  const selectOption = getByLabelText(container, 'Race')
  selectOption.onchange = jest.fn()

  fireEvent.change(selectOption, { target: { value: 'dragonborn' } });

  expect(selectOption.value).toBe('dragonborn')
  expect(selectOption.onchange).toBeCalled()
  
});

