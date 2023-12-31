import { Member } from '../../../shared/models/Member';

export const createMembers = (): Member[] => [
  {
    id: 1,
    name: 'member A',
    linkId: 3,
  },
  {
    id: 2,
    name: 'member B',
    linkId: 1,
  },
  {
    id: 3,
    name: 'member C',
    linkId: 2,
  },
  {
    id: 4,
    name: 'member D',
    linkId: null,
  },
  {
    id: 5,
    name: 'member E',
    linkId: null,
  },
  {
    id: 6,
    name: 'member F',
    linkId: 1,
  },
  {
    id: 7,
    name: 'member G',
    linkId: 9,
  },
  {
    id: 8,
    name: 'member H',
    linkId: 9,
  },
  {
    id: 9,
    name: 'member I',
    linkId: null,
  },
  {
    id: 10,
    name: 'member J',
    linkId: 10,
  },
  {
    id: 11,
    name: 'member K',
    linkId: null,
  },
];
