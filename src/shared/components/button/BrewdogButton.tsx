import React, { Fragment } from 'react';
import './BrewdogButton.css';

interface BrewdogButtonProps {
  label?: string;
  onClick: () => void;
}

const BrewdogButton = (props: BrewdogButtonProps) => {
  return (
    <Fragment>
      <button className='btn btn-primary'>{props.label}</button>
    </Fragment>
  );
};

export default BrewdogButton;
