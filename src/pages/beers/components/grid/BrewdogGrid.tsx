import React, { useEffect } from 'react';
import {
  Grid,
  GridColumn,
  GridExpandChangeEvent,
  GridPageChangeEvent,
} from '@progress/kendo-react-grid';
import './BrewdogGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import { beerExpanded, beersRequested } from '../../../../store/beers/beers.actions';
import { beersSelector, gridStateSelector } from '../../../../store/beers/beers.selectors';
import BrewdogDetailComponent from '../detail/BrewdogDetail';

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
      detail={BrewdogDetailComponent}
      expandField='expanded'
      onExpandChange={(event: GridExpandChangeEvent) => {
        dispatch(beerExpanded(event.dataItem.id, !event.dataItem.expanded));
      }}
    >
      <GridColumn field='name' title='Name' />
      <GridColumn field='tagline' title='Tag line' />
      <GridColumn field='first_brewed' title='First Brewed' width={120} />
      <GridColumn field='abv' title='Abv' width={60} />
    </Grid>
  );
};

export default BrewdogGrid;
