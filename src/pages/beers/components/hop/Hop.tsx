import React from 'react';
import { Hop } from '../../../../shared/models/Beer';
import './Hop.css';
import { getColorByAdd } from '../../utils.ts/color';

export interface HopComponentProps {
  hop: Hop;
  index: number;
}

const HopComponent = (props: HopComponentProps) => {
  return (
    <div
      key={'hop' + props.index}
      className='card'
      style={{ backgroundColor: getColorByAdd(props.hop.add) }}
    >
      <div className='card-body'>
        <h5 className='card-title'>{props.hop.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted attribute-info'>{props.hop.attribute}</h6>
        <p className='card-text'>
          <span className='quantity-info'>
            {props.hop.amount.value} {props.hop.amount.unit}
          </span>
          <span className='procedure-info'>Added at the {props.hop.add}</span>
        </p>
      </div>
    </div>
  );
};

export default HopComponent;
