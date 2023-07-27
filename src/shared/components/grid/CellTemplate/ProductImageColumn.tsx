import React from 'react';
import './ProductImageColumn.css';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

export const ProductImageColumn = (props: GridCustomCellProps) => {
  return (
    <td className='image-cell'>
      <img src={props.dataItem.image_url} style={{ height: 200 }} alt={props.dataItem.tagline} />
    </td>
  );
};
