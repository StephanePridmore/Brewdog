import React, { Fragment } from 'react';
import './Summary.css';

interface SummaryProps {
  totalMembers: number;
  totalParents: number;
  totalErrors: number;
}

const SummaryComponent = (props: SummaryProps) => {
  return (
    <Fragment>
      <h1 className='member-title'>Members</h1>
      <p data-testid='total-members'>members: {props.totalMembers}</p>
      <p data-testid='total-parents'>parent members: {props.totalParents}</p>
      <p data-testid='total-errors'>errors: {props.totalErrors}</p>
    </Fragment>
  );
};

export default SummaryComponent;
