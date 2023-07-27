import { Beer } from "../../shared/models/Beer";

export interface BeersState {
  beers: Beer[];
  errors: string;
}

export const beersInitialState: BeersState = {
  beers: [],
  errors: "",
};
