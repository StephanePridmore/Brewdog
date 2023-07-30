import React from 'react';
import { GridDetailRowProps } from '@progress/kendo-react-grid';
import { Beer } from '../../../../shared/models/Beer';
import './BrewdogDetail.css';
import HopComponent from '../hop/Hop';
import MaltComponent from '../malt/Malt';

const BrewdogDetailComponent = (props: GridDetailRowProps) => {
  const beer = props.dataItem as Beer;
  return (
    <div className='detail-container'>
      <div className='detail-card'>
        <div className='info-card'>
          <strong>ID:</strong>
          <p>{beer.id}</p>
          <strong>Name:</strong>
          <p>{beer.name}</p>
          <strong>Tag:</strong>
          <p>{beer.tagline}</p>
          <strong>Description:</strong>
          <p>{beer.description}</p>
        </div>
        <div className='picture-card'>
          <img className='picture-img' src={beer.image_url} alt={beer.tagline}></img>
        </div>
      </div>

      <div className='ingredients-card'>
        <h5>Malt</h5>
        <div className='malt-list'>
          {beer.ingredients.malt.map((malt, i) => {
            return <MaltComponent key={i} index={i} malt={malt}></MaltComponent>;
          })}
        </div>

        <h5>Hops</h5>
        <div className='hop-list'>
          {beer.ingredients.hops.map((hop, i) => {
            return <HopComponent key={i} index={i} hop={hop}></HopComponent>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BrewdogDetailComponent;
