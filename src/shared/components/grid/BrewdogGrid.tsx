import React, { useEffect } from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import './BrewdogGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import { beersSelector, gridStateSelector } from '../../../store/beers/beers.selectors';
import { beersRequested } from '../../../store/beers/beers.actions';
import { ProductImageColumn } from './CellTemplate/ProductImageColumn';
import { ProductNameColumn } from './CellTemplate/ProductNameColumn';

const BrewdogGrid = () => {
  const dispatch = useDispatch();
  const beers = useSelector(beersSelector);
  const gridState = useSelector(gridStateSelector);

  const loadBeersList = (skip: number, pageSize: number) => {
    dispatch(beersRequested(skip, pageSize));
  };

  useEffect(() => {
    loadBeersList(gridState.skip, gridState.pageSize);
  }, []);

  return (
    <Grid
      data={beers}
      total={gridState.total}
      skip={gridState.skip}
      pageable={gridState.pageable}
      pageSize={gridState.pageSize}
      onPageChange={(e: GridPageChangeEvent) => {
        loadBeersList(e.page.skip, gridState.pageSize);
      }}
    >
      <GridColumn field='name' title='Product Name' cell={ProductNameColumn} width={250} />
      <GridColumn field='description' title='Description' />
      <GridColumn field='first_brewed' title='First Brewed' width={120} />
      <GridColumn field='abv' title='Abv' width={50} />
      <GridColumn field='image_url' title='Image' width={200} cell={ProductImageColumn} />
    </Grid>
  );
};

export default BrewdogGrid;
