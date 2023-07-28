import React from 'react';
import './Icon.css';

interface IconProps {
  testId?: string;
  icon?: string;
  title?: string;
}

const IconButton = (props: IconProps) => {
  return (
    <button data-testid={props.testId} title={props.title} className='btn button-icon'>
      <i data-testid={props.testId + '-icon'} className={props.icon}></i>
    </button>
  );
};

export default IconButton;
