import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import React, { Fragment } from 'react';
import './BrewdogSwitch.css';

interface BrewdogSwitchProps {
  label?: string;
  title?: string;
  value?: string | number | boolean | string[] | null | undefined;
  onChange: (event: boolean) => void;
}

const BrewdogSwitch = (props: BrewdogSwitchProps) => {
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

export default BrewdogSwitch;
