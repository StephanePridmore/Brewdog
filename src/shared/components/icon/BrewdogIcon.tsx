import React, { Fragment } from 'react';
import './BrewdogIcon.css';

interface BrewdogIconProps {
  icon?: string;
  title?: string;
  onClick: () => void;
}

const BrewdogIcon = (props: BrewdogIconProps) => {
  return (
    <Fragment>
      <button title={props.title} className='btn button-icon' onClick={() => props.onClick()}>
        <i className={props.icon}></i>
      </button>
    </Fragment>
  );
};

export default BrewdogIcon;
