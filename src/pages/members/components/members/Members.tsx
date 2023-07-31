import React, { Fragment } from 'react';
import './Members.css';
import { Member } from '../../../../shared/models/Member';
import { findChildMembers } from '../../utils/billing';

interface MembersProps {
  members: Member[];
  billableMembers: Member[];
}

const MembersComponent = (props: MembersProps) => {
  return (
    <Fragment>
      <h3 className='member-title'>Billable Members</h3>
      <div data-testid='billable-members'>
        {props.billableMembers.map((member, i) => {
          const childs = findChildMembers(member.id, props.members);
          return (
            <Fragment key={'member' + i}>
              <p key={'member' + member.id}>{`${member.name}: ${member.id} (billable persons: ${
                childs.length + 1
              }, childs: ${childs.length})`}</p>
              {childs.map((child) => {
                const checkSecondLevel = findChildMembers(child.id, props.members);
                return (
                  <p key={'child' + child.id}>
                    {`child --> ${child.name}: ${child.id} (parent id: ${member.id}, childs: ${checkSecondLevel.length})`}
                  </p>
                );
              })}
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MembersComponent;
