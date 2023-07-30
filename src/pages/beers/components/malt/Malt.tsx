import React from 'react';
import { Malt } from '../../../../shared/models/Beer';
import './Malt.css';

export interface MaltComponentProps {
  malt: Malt;
  index: number;
}
const MaltComponent = (props: MaltComponentProps) => {
  return (
    <div key={'malt' + props.index} className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{props.malt.name}</h5>
        <p className='card-text'>
          <span className='quantity-info'>
            {props.malt.amount.value} {props.malt.amount.unit}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MaltComponent;
