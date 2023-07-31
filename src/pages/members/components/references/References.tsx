import React, { Fragment } from 'react';
import './References.css';
import { Member } from '../../../../shared/models/Member';

interface ReferencesProps {
  circularReferencesList: Member[];
}

const ReferencesComponent = (props: ReferencesProps) => {
  return (
    <Fragment>
      <h3 className='member-title'>Circular References</h3>
      <div data-testid='errors'>
        {props.circularReferencesList.map((member, index) => {
          return <p key={index}>{`${member.name}: ${member.id} -> ${member.linkId}`}</p>;
        })}
      </div>
    </Fragment>
  );
};

export default ReferencesComponent;
