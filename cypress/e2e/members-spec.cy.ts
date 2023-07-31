import { checkElementText, navigateToBrewdog, navigateToMembersPage } from '../api/common.context';
import {
  billableMembersPanel,
  errorsPanel,
  totalErrors,
  totalMembers,
  totalParents,
} from '../api/members.elements';

describe('beers page spec', () => {
  it('should display beers in grid', () => {
    navigateToBrewdog();

    navigateToMembersPage();

    checkElementText(totalMembers, 'members: 11');
    checkElementText(totalParents, 'parent members: 4');
    checkElementText(totalErrors, 'errors: 5');

    checkElementText(billableMembersPanel, 'member D: 4 (billable persons: 1, childs: 0)');
    checkElementText(billableMembersPanel, 'member E: 5 (billable persons: 1, childs: 0)');
    checkElementText(billableMembersPanel, 'member I: 9 (billable persons: 3, childs: 2)');
    checkElementText(billableMembersPanel, 'child --> member G: 7 (parent id: 9, childs: 0)');
    checkElementText(billableMembersPanel, 'child --> member H: 8 (parent id: 9, childs: 0)');
    checkElementText(billableMembersPanel, 'member K: 11 (billable persons: 1, childs: 0)');

    checkElementText(errorsPanel, 'member A: 1 -> 3');
    checkElementText(errorsPanel, 'member B: 2 -> 1');
    checkElementText(errorsPanel, 'member C: 3 -> 2');
    checkElementText(errorsPanel, 'member F: 6 -> 1');
    checkElementText(errorsPanel, 'member J: 10 -> 10');
  });
});
