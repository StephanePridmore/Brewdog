import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import React, { Fragment } from 'react';
import './Switch.css';

interface SwitchButtonProps {
  label?: string;
  title?: string;
  value?: string | number | boolean | string[] | null | undefined;
  onChange: (event: boolean) => void;
}

const SwitchButton = (props: SwitchButtonProps) => {
  return (
    <Fragment>
      <div className='switch-label' title={props.title}>
        {props.label}
      </div>
      <Switch
        value={props.value}
        onChange={(event: SwitchChangeEvent) => {
          props.onChange(event.value);
        }}
      />
    </Fragment>
  );
};

export default SwitchButton;
