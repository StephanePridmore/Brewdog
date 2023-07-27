import React from 'react';
import './ProductNameColumn.css';
import { GridCustomCellProps } from '@progress/kendo-react-grid';

export const ProductNameColumn = (props: GridCustomCellProps) => {
  return (
    <td>
      <div className='product-name'>{props.dataItem.name}</div>
      <div className='product-tag'>{props.dataItem.tagline}</div>
    </td>
  );
};