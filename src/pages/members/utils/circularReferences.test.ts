import { createMembers } from '../data/members';
import { detectCircularReferences, sanitizeCircularReferences } from './circularReferences';

test('should return 1 member', () => {
  const member = createMembers()[5];
  const result = sanitizeCircularReferences([member]);
  expect(result.length).toBe(1);
});

test('should detect a direct circular references (10 -> 10)', () => {
  const member = createMembers()[9];
  const result = sanitizeCircularReferences([member]);
  expect(result.length).toBe(0);
});

test('should detect and remove a circular references (1 -> 2 -> 3)', () => {
  const [first, second, third] = createMembers();
  const result = sanitizeCircularReferences([first, second, third]);
  expect(result.length).toBe(0);
});

test('should detect and remove circular members', () => {
  const members = createMembers();
  const result = sanitizeCircularReferences(members);
  expect(result.length).toBe(6);
});

test('should return members with a circular reference', () => {
  const members = createMembers();
  const result = detectCircularReferences(members);
  expect(result.length).toBe(5);
});

test('should return all circular references (1, 2, 3)', () => {
  const [first, second, third, fourth] = createMembers();
  const result = detectCircularReferences([first, second, third, fourth]);
  expect(result.length).toBe(3);
});
