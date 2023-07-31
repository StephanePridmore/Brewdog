import React from 'react';
import { render } from '@testing-library/react';
import { checkComponentWithText } from '../../../../tests/beers.context';
import MembersComponent from './Members';
import { createMembers } from '../../data/members';
import { findParentMembers } from '../../utils/billing';
import { sanitizeCircularReferences } from '../../utils/circularReferences';

test('should render json data', () => {
  const members = createMembers();
  const sanitizedList = sanitizeCircularReferences(members);
  const billableMembers = findParentMembers(sanitizedList);

  render(<MembersComponent members={members} billableMembers={billableMembers}></MembersComponent>);

  checkComponentWithText(/member D: 4/i);
  checkComponentWithText(/member E: 5/i);
  checkComponentWithText(/member I: 9/i);
  checkComponentWithText(/member G: 7/i);
  checkComponentWithText(/member H: 8/i);
  checkComponentWithText(/member K: 11/i);
});
