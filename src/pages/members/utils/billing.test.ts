import { createMembers } from '../data/members';
import { findChildMembers, findParentMembers } from './billing';

test('should find parent members', () => {
  const members = createMembers();
  const result = findParentMembers(members);
  expect(result.length).toBe(4);
});

test('should find child members for item 9', () => {
  const members = createMembers();
  const result = findChildMembers(9, members);
  expect(result.length).toBe(2);
});

test('should find child members for item 11', () => {
  const members = createMembers();
  const result = findChildMembers(11, members);
  expect(result.length).toBe(0);
});
