import { GridPagerSettings } from '@progress/kendo-react-grid';
import { Beer } from '../../shared/models/Beer';

const createBeerGridState = (skip: number, take: number, abv?: number) => {
  const pagerSettings: GridPagerSettings = createPagerSettings();
  return {
    total: 100,
    skip: skip,
    abv: abv,
    pageSize: take,
    pageable: pagerSettings,
  };
};

const createPagerSettings = (): GridPagerSettings => {
  return {
    buttonCount: 5,
    info: true,
    type: 'numeric',
    pageSizes: true,
    previousNext: true,
  };
};

export interface GridState {
  total: number;
  skip: number;
  pageSize: number;
  pageable: GridPagerSettings;
  abv?: number;
}

export interface BeersState {
  beers: Beer[];
  error: string;
  gridState: GridState;
}

export const beersInitialState: BeersState = {
  beers: [],
  error: '',
  gridState: createBeerGridState(0, 10),
};
