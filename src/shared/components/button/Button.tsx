import React, { Fragment } from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Fragment>
      <button className='btn btn-primary'>{props.label}</button>
    </Fragment>
  );
};

export default Button;
