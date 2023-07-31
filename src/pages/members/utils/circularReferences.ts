import { Member } from '../../../shared/models/Member';

export const sanitizeCircularReferences = (members: Member[]): Member[] => {
  const visited: Set<number> = new Set();
  const noneCircularMembers: Member[] = [];

  for (let i = 0; i < members.length; i++) {
    const member = members[i];

    if (!isCircular(member.id, members, visited)) {
      noneCircularMembers.push(member);
    }
    visited.clear();
  }

  return noneCircularMembers;
};

export const detectCircularReferences = (members: Member[]): Member[] => {
  const visited: Set<number> = new Set();
  const membersWithCircularReference: Member[] = [];

  for (let i = 0; i < members.length; i++) {
    const member = members[i];

    if (isCircular(member.id, members, visited)) {
      membersWithCircularReference.push(member);
    }
    visited.clear();
  }

  return membersWithCircularReference;
};

function isCircular(currentId: number, members: Member[], visited: Set<number>): boolean {
  const member = members.find((m) => m.id == currentId);
  if (!member) {
    return false;
  }

  const { id, linkId } = member;
  if (currentId === member.linkId) {
    return true;
  }

  if (visited.has(currentId)) {
    return true;
  }

  visited.add(id);

  if (!linkId) {
    return false;
  }

  return isCircular(linkId, members, visited);
}
