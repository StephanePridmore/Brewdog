import React from 'react';
import { render } from '@testing-library/react';
import { checkComponentWithText } from '../../../../tests/beers.context';
import ReferencesComponent from './References';
import { createMembers } from '../../data/members';
import { detectCircularReferences } from '../../utils/circularReferences';

test('should render circular references', () => {
  const members = createMembers();
  const circularReferencesList = detectCircularReferences(members);

  render(
    <ReferencesComponent circularReferencesList={circularReferencesList}></ReferencesComponent>,
  );

  checkComponentWithText(/Circular References/i);

  checkComponentWithText(/member A: 1/i);
  checkComponentWithText(/member B: 2/i);
  checkComponentWithText(/member C: 3/i);
  checkComponentWithText(/member F: 6/i);
  checkComponentWithText(/member J: 10/i);
});
