import React from 'react';
import './Icon.css';

interface IconProps {
  icon?: string;
  title?: string;
  onClick: () => void;
}

const IconButton = (props: IconProps) => {
  return (
    <button title={props.title} className='btn button-icon' onClick={() => props.onClick()}>
      <i className={props.icon}></i>
    </button>
  );
};

export default IconButton;
