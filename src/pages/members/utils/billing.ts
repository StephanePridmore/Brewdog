import { Member } from '../../../shared/models/Member';

export function findParentMembers(data: Member[]): Member[] {
  return data.filter((member) => !member.linkId);
}

export function findChildMembers(parentId: number, members: Member[]): Member[] {
  const childs: Member[] = [];
  return findChilds(parentId, childs, members);
}

function findChilds(parentId: number, childs: Member[], members: Member[]): Member[] {
  const linkedMembers = members.filter((member) => member.linkId == parentId);

  for (let i = 0; i < linkedMembers.length; i++) {
    const member = linkedMembers[i];
    childs.push(member);
  }

  return childs;
}
