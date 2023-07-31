import React from 'react';
import './MembersPage.css';
import { createMembers } from './data/members';
import { findParentMembers } from './utils/billing';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../../shared/components/error/Error';
import { detectCircularReferences, sanitizeCircularReferences } from './utils/circularReferences';
import JsonComponent from './components/json/Json';
import SummaryComponent from './components/summary/Summary';
import MembersComponent from './components/members/Members';
import ReferencesComponent from './components/references/References';

function MembersPage() {
  const members = createMembers();
  const sanitizedList = sanitizeCircularReferences(members);
  const circularReferencesList = detectCircularReferences(members);
  const billableMembers = findParentMembers(sanitizedList);

  return (
    <div className='container'>
      <div className='members-page'>
        <div className='information-panel'>
          <SummaryComponent
            totalMembers={members.length}
            totalParents={billableMembers.length}
            totalErrors={circularReferencesList.length}
          ></SummaryComponent>
          <MembersComponent members={members} billableMembers={billableMembers}></MembersComponent>
          <ReferencesComponent
            circularReferencesList={circularReferencesList}
          ></ReferencesComponent>
        </div>
        <div className='data-panel'>
          <JsonComponent data={members}></JsonComponent>
        </div>
      </div>
    </div>
  );
}

const MembersPageWithErrorBoundary = withErrorBoundary(MembersPage, {
  fallback: <ErrorComponent></ErrorComponent>,
});

export default MembersPageWithErrorBoundary;
