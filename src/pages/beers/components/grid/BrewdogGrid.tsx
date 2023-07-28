import React, { useEffect } from 'react';
import { Grid, GridColumn, GridPageChangeEvent } from '@progress/kendo-react-grid';
import './BrewdogGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import { ProductImageColumn } from './CellTemplate/ProductImageColumn';
import { ProductNameColumn } from './CellTemplate/ProductNameColumn';
import { beersRequested } from '../../../../store/beers/beers.actions';
import { beersSelector, gridStateSelector } from '../../../../store/beers/beers.selectors';

const BrewdogGrid = () => {
  const dispatch = useDispatch();
  const beers = useSelector(beersSelector);
  const gridState = useSelector(gridStateSelector);

  const loadBeersList = (skip: number, pageSize: number, abv: number | undefined) => {
    dispatch(beersRequested(skip, pageSize, abv));
  };

  useEffect(() => {
    loadBeersList(gridState.skip, gridState.pageSize, gridState.abv);
  }, []);

  return (
    <Grid
      data={beers}
      total={gridState.total}
      skip={gridState.skip}
      pageable={gridState.pageable}
      pageSize={gridState.pageSize}
      onPageChange={(e: GridPageChangeEvent) => {
        loadBeersList(e.page.skip, gridState.pageSize, gridState.abv);
      }}
    >
      <GridColumn field='name' title='Product Name' cell={ProductNameColumn} width={250} />
      <GridColumn field='description' title='Description' />
      <GridColumn field='first_brewed' title='First Brewed' width={120} />
      <GridColumn field='abv' title='Abv' width={60} />
      <GridColumn field='image_url' title='Image' width={200} cell={ProductImageColumn} />
    </Grid>
  );
};

export default BrewdogGrid;
