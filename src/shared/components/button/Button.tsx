import React, { Fragment } from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Fragment>
      <button onClick={props.onClick} className='btn btn-primary'>
        {props.label}
      </button>
    </Fragment>
  );
};

export default Button;
